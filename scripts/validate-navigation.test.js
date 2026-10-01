const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const {test} = require('node:test');
const {validateNavigation} = require('./validate-navigation');

async function put(root, file, content) {
  await fs.mkdir(path.dirname(path.join(root, file)), {recursive: true});
  await fs.writeFile(path.join(root, file), content);
}
async function snapshot(root, base = root) {
  const result = {};
  for (const entry of await fs.readdir(root, {withFileTypes: true})) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) Object.assign(result, await snapshot(full, base));
    else if (entry.isFile()) result[path.relative(base, full)] = await fs.readFile(full, 'base64');
    else if (entry.isSymbolicLink()) result[path.relative(base, full)] = await fs.readlink(full);
  }
  return result;
}
async function fixture(t, {files = {}, sidebar = ['guide'], options = {}, locales = ['en'], extra = {}} = {}) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'docs-navigation-'));
  t.after(() => fs.rm(root, {recursive: true, force: true}));
  const config = {title: 'Fixture', url: 'https://example.test', baseUrl: '/',
    i18n: {defaultLocale: 'en', locales},
    presets: [['classic', {docs: {sidebarPath: './sidebars.json', routeBasePath: '/', ...options}}]]};
  await put(root, 'docusaurus.config.js', `module.exports = ${JSON.stringify(config)};`);
  await put(root, 'sidebars.json', JSON.stringify({siteSidebar: sidebar}));
  for (const [file, content] of Object.entries({
    'index.mdx': '---\nslug: /\n---\n# Home', 'guide.md': '# Guide', ...files,
  })) {
    if (content !== null) await put(root, `docs/${file}`, content);
  }
  for (const [file, content] of Object.entries(extra)) await put(root, file, content);
  return root;
}
async function check(t, setup, expected = []) {
  const root = await fixture(t, setup);
  const before = await snapshot(root);
  const result = await validateNavigation(root);
  assert.deepEqual(await snapshot(root), before, 'validation must not change any files');
  for (const pattern of expected) assert.match(result.errors.join('\n'), pattern);
  if (!expected.length) assert.deepEqual(result.errors, []);
  return result;
}

test('published membership, exact homepage, and partial exclusion', async (t) => {
  await check(t, {files: {'_partial.mdx': '# Not a page'}});
});
test('explicit IDs retain directory prefix and strip numbered paths', async (t) => {
  await check(t, {files: {'02-section/03-file.mdx': '---\nid: renamed\n---\n# Page'}, sidebar: ['guide', 'section/renamed']});
});
test('parse_number_prefixes can be disabled', async (t) => {
  await check(t, {files: {'02-section/03-file.md': '---\nparse_number_prefixes: false\n---\n# Page'}, sidebar: ['guide', '02-section/03-file']});
});
test('category doc links count; ref, link and html support discovery', async (t) => {
  await check(t, {sidebar: [{type: 'category', label: 'Section', link: {type: 'doc', id: 'guide'}, items: [
    {type: 'ref', id: 'guide'}, {type: 'ref', id: 'guide'},
    {type: 'link', label: 'External', href: 'https://example.test'},
    {type: 'html', value: '<hr>'},
    {type: 'category', label: 'Generated landing', link: {type: 'generated-index'}, items: []},
  ]}]});
});
test('category shorthand uses canonical normalization', async (t) => {
  await check(t, {sidebar: {Section: ['guide']}});
});
test('refs and URL links cannot substitute for membership', async (t) => {
  await check(t, {sidebar: [{type: 'ref', id: 'guide'}, {type: 'link', label: 'Guide', href: '/guide'}]}, [/guide.*no sidebar membership/]);
});
test('missing targets and duplicate membership identify both locations', async (t) => {
  await check(t, {sidebar: ['guide', {type: 'category', label: 'Section', link: {type: 'doc', id: 'guide'}, items: [{type: 'ref', id: 'absent'}]}]},
    [/siteSidebar\[1\]\.link: duplicate membership.*siteSidebar\[0\]/, /siteSidebar\[1\]\.items\[0\].*absent.*does not exist/]);
});
test('duplicate document IDs identify source files', async (t) => {
  await check(t, {files: {'alias.md': '---\nid: guide\n---\n# Duplicate'}}, [/guide.md.*duplicate document ID "guide".*alias.md/]);
});
test('unlisted docs need no coverage and may remain referenced', async (t) => {
  const files = {'hidden.md': '---\nunlisted: true\n---\n# Hidden'};
  await check(t, {files});
  await check(t, {files, sidebar: ['guide', 'hidden', {type: 'ref', id: 'hidden'}]});
});
test('drafts are absent in production; explicit draft targets fail', async (t) => {
  const files = {'draft.md': '---\ndraft: true\n---\n# Draft'};
  await check(t, {files});
  for (const target of ['draft', {type: 'ref', id: 'draft'}, {type: 'category', label: 'Draft', link: {type: 'doc', id: 'draft'}, items: []}]) {
    await check(t, {files, sidebar: ['guide', target]}, [/draft.*production draft/]);
  }
});
test('only index is exempt, regardless of displayed_sidebar or nested filename', async (t) => {
  await check(t, {files: {'section/index.md': '# Nested', 'other.md': '---\ndisplayed_sidebar: siteSidebar\n---\n# Other'}}, [/section\/index.*no sidebar membership/, /other.*no sidebar membership/]);
});
test('homepage must exist with exact ID and root route', async (t) => {
  await check(t, {files: {'index.mdx': null}}, [/Homepage.*exact ID "index"/]);
  await check(t, {files: {'index.mdx': '---\nid: home\nslug: /\n---\n# Home'}, sidebar: ['guide', 'home']}, [/Homepage.*exact ID "index"/]);
  await check(t, {files: {'index.mdx': '---\nslug: /elsewhere\n---\n# Home'}}, [/homepage "index".*resolve to "\/"/]);
  await check(t, {files: {'index.mdx': '---\nunlisted: true\nslug: /\n---\n# Home'}}, [/homepage "index" must be listed/]);
  await check(t, {options: {routeBasePath: '/docs'}}, [/docs root.*must match site root/]);
});
test('localized overrides and fallback use production availability', async (t) => {
  await check(t, {locales: ['en', 'ja']});
  await check(t, {locales: ['en', 'ja'], extra: {'i18n/ja/docusaurus-plugin-content-docs/current/guide.md': '---\ndraft: true\n---\n# Local draft'}}, [/\[ja\/current\].*guide.*production draft/]);
  await check(t, {locales: ['en', 'ja'], extra: {'i18n/ja/docusaurus-plugin-content-docs/current/guide.md': '---\nid: translated-id\n---\n# Changed ID'}}, [/\[ja\/current\].*guide.*does not exist/, /translated-id.*no sidebar membership/]);
  await check(t, {locales: ['en', 'ja'], extra: {'i18n/ja/docusaurus-plugin-content-docs/current/translated-only.md': '# Not discovered by Docusaurus'}});
});
test('published versions are validated independently; excluded versions are skipped', async (t) => {
  const extra = {'versions.json': '["1.0"]', 'versioned_docs/version-1.0/index.md': '---\nslug: /\n---\n# Home',
    'versioned_docs/version-1.0/old.md': '# Old', 'versioned_sidebars/version-1.0-sidebars.json': '{"siteSidebar":["old"]}'};
  await check(t, {extra});
  await check(t, {extra: {...extra, 'versioned_sidebars/version-1.0-sidebars.json': '{"siteSidebar":[]}' }}, [/\[en\/1.0\].*old.*no sidebar membership/]);
  await check(t, {extra, options: {onlyIncludeVersions: ['current']}});
});
test('malformed metadata, sidebar and traversal-like IDs fail with location', async (t) => {
  await check(t, {files: {'bad.md': '---\nid: ../outside\n---\n# Bad'}}, [/bad.md.*cannot include slash/]);
  await check(t, {files: {'bad.md': '---\ndraft: {bad: value}\n---\n# Bad'}}, [/bad.md.*draft/]);
  await check(t, {sidebar: [{type: 'unknown', id: 'guide'}]}, [/siteSidebar\[0\].*Unknown sidebar item type/s]);
  await check(t, {sidebar: ['guide', {type: 'doc'}]}, [/siteSidebar\[1\].*id/s]);
  await check(t, {sidebar: ['guide', {type: 'ref', id: '../../outside'}]}, [/outside.*does not exist/]);
  await check(t, {sidebar: [{type: 'autogenerated', dirName: '.'}]}, [/autogenerated.*not supported/, /guide.*no sidebar membership/]);
  const root = await fixture(t);
  await put(root, 'sidebars.json', '{invalid');
  const before = await snapshot(root);
  assert.match((await validateNavigation(root)).errors.join('\n'), /sidebars.json/);
  assert.deepEqual(await snapshot(root), before);
});
test('CLI exits nonzero on invalid navigation and rejects write options; no writes', async (t) => {
  const root = await fixture(t);
  await put(root, 'scripts/validate-navigation.js', await fs.readFile(__filename.replace('.test.js', '.js')));
  await fs.symlink(path.resolve(__dirname, '../node_modules'), path.join(root, 'node_modules'), 'dir');
  function run(args = []) { return spawnSync(process.execPath, ['scripts/validate-navigation.js', ...args], {cwd: root, encoding: 'utf8'}); }
  const before = await snapshot(root);
  assert.equal(run().status, 0);
  assert.match(run(['--fix']).stderr, /no options; read-only/);
  assert.equal(run(['--fix']).status, 1);
  assert.deepEqual(await snapshot(root), before);
  await put(root, 'sidebars.json', '{"siteSidebar":["missing"]}');
  const failureBefore = await snapshot(root);
  const result = run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /siteSidebar\[0\].*missing.*does not exist/);
  assert.deepEqual(await snapshot(root), failureBefore);
});
