const { execSync } = require('child_process');
const path = require('path');

const pluginDir = path.join(__dirname, '..', 'plugins', 'example-code-snippets');

const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: pluginDir });

console.log('Preparing SDK git repos...');
run('npm run prepare-git-repos');
