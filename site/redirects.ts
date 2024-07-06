import type { Options } from '@docusaurus/plugin-client-redirects'

// map<from, to>
const REDIRECTS = {
    // ## Useful Redirects
    '/docs/limits': '/limits',

    // ## Relocated Sections
    // former top-level cache pages
    '/getting-started': '/cache/getting-started',
    '/pricing': '/cache/manage/pricing',
    '/docs/pricing': '/cache/manage/pricing',
    '/docs/API-reference': '/cache/develop/api-reference',
    '/API-reference': '/cache/develop/api-reference',

    // cache api-reference
    '/develop/api-reference/collections/collectionttl': '/cache/develop/api-reference/collection-ttl',
    '/develop/api-reference/collections/sortedsets': '/cache/develop/api-reference/sorted-set-collections',
    '/develop/api-reference/collections/dictionary': '/cache/develop/api-reference/dictionary-collections',
    '/develop/api-reference/collections/list': '/cache/develop/api-reference/list-collections',
    '/develop/api-reference/collections/sets': '/cache/develop/api-reference/set-collections',
    '/develop/api-reference/auth-tokens': '/cache/develop/api-reference/auth',

    // leaderboards
    '/leaderboards/develop/api-reference': '/leaderboards/api-reference',
    '/leaderboards/develop/language-support': '/leaderboards/language-support',

    // topics
    '/topics/develop/integrations/aws-secrets-manager': '/topics/integrations/aws-secrets-manager',
    '/introduction/momento-topics': '/topics',
    '/develop/api-reference/topics': '/topics/develop/api-reference',
    '/develop/sdks/nodejs/topics-cheat-sheet': '/sdks/nodejs/topics',
    '/topics/webhooks': '/topics/webhooks/overview',
    '/topics/develop/patterns/asynchronous-processing': '/topics/patterns/running-background-tasks',

    // SDKs
    '/develop/sdks/dart': '/sdks/dart',
    '/develop/sdks/dotnet': '/sdks/dotnet',
    '/develop/sdks/elixir': '/sdks/elixir',
    '/develop/sdks/go': '/sdks/go',
    '/develop/sdks/java': '/sdks/java',
    '/develop/sdks/kotlin': '/sdks/kotlin',
    '/develop/sdks/nodejs': '/sdks/nodejs',
    '/develop/sdks/php': '/sdks/php',
    '/develop/sdks/python': '/sdks/python',
    '/develop/sdks/ruby': '/sdks/ruby',
    '/develop/sdks/rust': '/sdks/rust',
    '/develop/sdks/swift': '/sdks/swift',

    // ## Relocated Pages
    '/develop/datatypes': '/cache/develop/basics/datatypes',

    // caching-with-serverless
    '/how-it-works/caching-with-serverless': '/cache/introduction/what-is-serverless-caching',
    '/docs/how-it-works/caching-with-serverless': '/cache/introduction/what-is-serverless-caching',

    // caching-concepts
    '/docs/category/caching-concepts': '/cache/introduction/common-caching-patterns',
    '/docs/caching-concepts/caching-strategies-and-patterns': '/cache/introduction/common-caching-patterns',

    // sdk "cheat sheets"
    '/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet': '/sdks/go/cache',
    '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet': '/sdks/nodejs/cache',
    '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet': '/sdks/php/cache',
    '/develop/sdks/php/cheat-sheet': '/sdks/php/cache',
    '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet': '/sdks/python/cache',
    '/develop/sdks-integrations/deploying-javascript-web-sdk': '/sdks/web',

    // ## Dead Pages
    '/docs/overview': '/',
    '/how-it-works': '/',
    '/docs/how-it-works': '/',
    '/how-it-works/momento-concepts': '/',
    '/docs/how-it-works/momento-concepts': '/',

    // guides
    '/guides': '/cache',
    '/docs/guides': '/cache',
    '/guides/caching-with-aws-lambda': '/cache',
    '/docs/guides/caching-with-aws-lambda': '/cache',
    '/cache/develop/guides/caching-with-aws-lambda': '/cache/introduction/what-is-serverless-caching',

    // remove MVI
    '/vector-index': '/',
    '/vector-index/*': '/',
};

// map<FROM,TO> - insert a redirect for each existing page with URL prefix <TO>, replacing with URL prefix <FROM>
const REDIRECT_PREFIXES = Object.entries({
    '/develop/': '/cache/develop/',
    '/learn/': '/cache/learn/',
    '/manage/': '/cache/manage/',
    '/introduction/': '/cache/introduction/',
    '/cache/develop/integrations/': '/cache/integrations/',
    '/develop/integrations/': '/cache/integrations/',
    '/develop/sdks-integrations/': '/cache/integrations/',
});

export const REDIRECT_OPTIONS: Options = {
    redirects: Object.entries(REDIRECTS).map(([from, to]) => ({ from, to })),

    createRedirects: (existingPath) =>
        REDIRECT_PREFIXES
        .filter(([_from, to]) => existingPath.startsWith(to))
        .map(([from, to]) => from + existingPath.slice(to.length)),
};