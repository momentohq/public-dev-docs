import type { Options } from '@docusaurus/plugin-client-redirects';

// map<from, to>
const REDIRECTS = {
    // Useful Redirects
    '/docs/limits': '/cache/manage/limits',
    '/cache/limits': '/cache/manage/limits',

    // Relocated Sections
    // former top-level pages
    '/getting-started': '/cache/getting-started',
    '/pricing': 'https://www.gomomento.com/pricing',
    '/docs/pricing': 'https://www.gomomento.com/pricing',
    '/cache/manage/pricing': 'https://www.gomomento.com/pricing',
    '/docs/API-reference': '/cache/develop/api-reference',
    '/API-reference': '/cache/develop/api-reference',
    '/sdks': '/platform/sdks',

    // cache api-reference
    '/develop/api-reference/collections/collectionttl': '/cache/develop/api-reference/collection-ttl',
    '/develop/api-reference/collections/sortedsets': '/cache/develop/api-reference/sorted-set-collections',
    '/develop/api-reference/collections/dictionary': '/cache/develop/api-reference/dictionary-collections',
    '/develop/api-reference/collections/list': '/cache/develop/api-reference/list-collections',
    '/develop/api-reference/collections/sets': '/cache/develop/api-reference/set-collections',
    '/develop/api-reference/auth-tokens': '/platform/authentication',

    // leaderboards
    '/leaderboards/develop/api-reference': '/leaderboards/api-reference',
    '/leaderboards/develop/language-support': '/leaderboards/language-support',

    // topics
    '/topics/develop/integrations/aws-secrets-manager': '/topics',
    '/topics/integrations/aws-secrets-manager': '/topics',
    '/introduction/momento-topics': '/topics',
    '/develop/api-reference/topics': '/topics/api-reference',
    '/topics/develop/api-reference': '/topics/api-reference',
    '/topics/api-reference/webhooks': '/topics/api-reference',
    '/develop/sdks/nodejs/topics-cheat-sheet': '/platform/sdks/nodejs/topics',
    '/topics/webhooks': '/topics',
    '/topics/develop/patterns/asynchronous-processing': '/topics/patterns/instant-messaging',
    '/topics/patterns/running-background-tasks': '/topics/patterns/instant-messaging',
    '/topics/patterns/token-id-webhook': '/topics/patterns/instant-messaging',
    '/topics/integrations/lambda-handler': '/topics',
    '/topics/webhooks/*': '/topics',

    // Relocated Pages
    '/develop/datatypes': '/cache/develop/basics/datatypes',
    '/cache/learn/security/private-link': '/platform/connectivity/private-link',

    // caching-with-serverless
    '/how-it-works/caching-with-serverless': 'https://www.gomomento.com/blog/a-platform-for-everyone/',
    '/docs/how-it-works/caching-with-serverless': 'https://www.gomomento.com/blog/a-platform-for-everyone/',

    // caching-concepts
    '/docs/category/caching-concepts': '/cache/getting-started',
    '/docs/caching-concepts/caching-strategies-and-patterns': '/cache/getting-started',
    '/cache/introduction/common-caching-patterns': '/cache/getting-started',
    '/cache/introduction/common-caching-strategies': '/cache/patterns/database-caching',

    // sdk "cheat sheets"
    '/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet': '/platform/sdks/go/cache',
    '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet': '/platform/sdks/nodejs/cache',
    '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet': '/platform/sdks/php/cache',
    '/develop/sdks/php/cheat-sheet': '/platform/sdks/php/cache',
    '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet': '/platform/sdks/python/cache',
    '/develop/sdks-integrations/deploying-javascript-web-sdk': '/platform/sdks/web',

    // Cross-product consolidation: auth / account / api -> Platform (decision 0012 / T-0036).
    // Canonical homes now live under /platform/**; every historical path 301s STRAIGHT to
    // canonical (no chains). Keep these so external inbound links keep landing.
    // -- Authentication (consolidated from the cache / topics / api trees) --
    '/cache/authentication': '/platform/authentication',
    '/cache/authentication/api-keys': '/platform/authentication/api-keys',
    '/cache/authentication/tokens': '/platform/authentication/tokens',
    '/cache/authentication/tokens/permissions': '/platform/authentication/roles-and-permissions',
    '/topics/authentication': '/platform/authentication',
    '/topics/authentication/api-keys': '/platform/authentication/api-keys',
    '/topics/authentication/tokens': '/platform/authentication/tokens',
    '/topics/authentication/tokens/permissions': '/platform/authentication/roles-and-permissions',
    '/api/authentication': '/platform/authentication',
    '/api/authentication/api-keys': '/platform/authentication/api-keys',
    '/api/authentication/tokens': '/platform/authentication/tokens',
    '/api/authentication/tokens/permissions': '/platform/authentication/roles-and-permissions',
    '/cache/develop/api-reference/auth': '/platform/authentication',
    '/topics/api-reference/auth': '/platform/authentication',
    // -- older develop/* auth paths (repointed straight to canonical; no chains) --
    '/cache/develop/authentication': '/platform/authentication',
    '/cache/develop/authentication/api-keys': '/platform/authentication/api-keys',
    '/cache/develop/authentication/tokens': '/platform/authentication/tokens',
    '/cache/develop/authentication/permissions': '/platform/authentication/roles-and-permissions',
    '/topics/develop/authentication': '/platform/authentication',
    '/topics/develop/authentication/api-keys': '/platform/authentication/api-keys',
    '/topics/develop/authentication/tokens': '/platform/authentication/tokens',
    '/topics/develop/authentication/tokens/permissions': '/platform/authentication/roles-and-permissions',
    '/topics/develop/authentication/permissions': '/platform/authentication/roles-and-permissions',
    '/api/authentication/permissions': '/platform/authentication/roles-and-permissions',
    // -- API overview + account management / sharing --
    '/api': '/platform/api',
    '/account-management/api-keys-http-api': '/platform/authentication/api-keys',
    '/account-management/roles-http-api': '/platform/authentication/roles-and-permissions',
    '/account-sharing': '/platform/account-management',

    // Dead Pages
    '/docs/overview': '/',
    '/how-it-works': '/',
    '/docs/how-it-works': '/',
    '/how-it-works/momento-concepts': '/',
    '/docs/how-it-works/momento-concepts': '/',
    '/cache/introduction/what-is-serverless-caching': 'https://www.gomomento.com/blog/a-platform-for-everyone/',
    '/platform/sdks/go/storage': '/platform/sdks/go',
    '/platform/sdks/php/storage': '/platform/sdks/php',
    '/platform/sdks/rust/storage': '/platform/sdks/rust',
    '/platform/sdks/nodejs/storage': '/platform/sdks/nodejs',
    '/docs/storage': '/',
    '/storage': '/',

    // guides
    '/guides': '/cache',
    '/docs/guides': '/cache',
    '/guides/caching-with-aws-lambda': '/cache',
    '/docs/guides/caching-with-aws-lambda': '/cache',
    '/cache/develop/guides/caching-with-aws-lambda': 'https://www.gomomento.com/blog/a-platform-for-everyone/',

    // remove MVI
    '/vector-index': '/',
    '/vector-index/*': '/',

    // Momento Cache (dedicated-capacity) docs relocated under the /product/ prefix
    '/capacity-pool/http-api': '/product/cache/api-reference/capacity-pool',
    '/database/http-api': '/product/cache/api-reference/database',
};

// map<FROM,TO> - insert a redirect for each existing page with URL prefix <TO>, replacing with URL prefix <FROM>
const REDIRECT_PREFIXES = Object.entries({
    '/develop/': '/cache/develop/',
    '/learn/': '/cache/learn/',
    '/manage/': '/cache/',
    '/introduction/': '/cache/introduction/',
    '/cache/develop/integrations/': '/cache/integrations/',
    '/develop/integrations/': '/cache/integrations/',
    '/develop/sdks-integrations/': '/cache/integrations/',
    '/sdks/': '/platform/sdks/',
    '/develop/sdks/': '/platform/sdks/'
});

const createRedirect = (existingPath) => {
    const redirects = REDIRECT_PREFIXES
        .filter(([_from, to]) => existingPath.startsWith(to))
        .map(([from, to]) => from + existingPath.slice(to.length));

    return redirects;
};

export const REDIRECT_OPTIONS: Options = {
    redirects: Object.entries(REDIRECTS).map(([from, to]) => ({ from, to })),
    createRedirects: createRedirect,
};
