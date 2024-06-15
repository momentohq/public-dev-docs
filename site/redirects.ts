import type { Options } from '@docusaurus/plugin-client-redirects'

// map<from, to>
const REDIRECTS = {
    // Redirect overview
    '/docs/overview': '/cache',
    // Redirect limits
    '/limits': '/cache/limits',
    '/docs/limits': '/cache/limits',
    // Redirect getting started
    '/getting-started': '/cache/getting-started',
    // Redirect pricing
    '/pricing': '/cache/manage/pricing',
    '/docs/pricing': '/cache/manage/pricing',
    // Redirect how-it-works
    '/how-it-works': '/cache',
    '/docs/how-it-works': '/cache',
    // Redirect momento-concepts
    '/how-it-works/momento-concepts': '/cache',
    '/docs/how-it-works/momento-concepts': '/cache',
    // Redirect how-it-works/caching-with-serverless
    '/how-it-works/caching-with-serverless': '/cache/introduction/what-is-serverless-caching',
    '/docs/how-it-works/caching-with-serverless': '/cache/introduction/what-is-serverless-caching',
    // Redirect category/caching-concepts
    '/docs/category/caching-concepts': '/cache/introduction/common-caching-patterns',
    // Redirect caching-concepts/caching-strategies-and-patterns
    '/docs/caching-concepts/caching-strategies-and-patterns': '/cache/introduction/common-caching-patterns',
    // Redirect guides
    '/guides': '/cache',
    '/docs/guides': '/cache',
    '/guides/caching-with-aws-lambda': '/cache',
    '/docs/guides/caching-with-aws-lambda': '/cache',
    '/cache/develop/guides/caching-with-aws-lambda': '/cache/introduction/what-is-serverless-caching',
    // Redirect API-reference
    '/docs/API-reference': '/cache/develop/api-reference',
    '/API-reference': '/cache/develop/api-reference',
    '/develop/sdks-integrations/aws-secrets-manager': '/cache/develop/integrations/aws-secrets-manager',
    '/develop/sdks-integrations/bulk-writing-from-redis-json-csv': '/cache/develop/integrations/bulk-writing-from-redis-json-csv',
    '/develop/sdks-integrations/momento-cache-laravel-php': '/cache/develop/integrations/momento-cache-laravel-php',
    '/develop/sdks-integrations/redis-client-compatibility': '/cache/develop/integrations/redis-client-compatibility',
    '/develop/guides/cheat-sheets/momento-cache-go-cheat-sheet': '/sdks/go/cache',
    '/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet': '/sdks/nodejs/cache',
    '/develop/guides/cheat-sheets/momento-cache-php-cheat-sheet': '/sdks/php/cache',
    '/develop/sdks/php/cheat-sheet': '/sdks/php/cache',
    '/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet': '/sdks/python/cache',
    '/develop/sdks-integrations/deploying-javascript-web-sdk': '/sdks/web',
    '/develop/api-reference/collections/collectionttl': '/cache/develop/api-reference/collection-ttl',
    '/develop/api-reference/collections/sortedsets': '/cache/develop/api-reference/sorted-set-collections',
    '/develop/api-reference/collections/dictionary': '/cache/develop/api-reference/dictionary-collections',
    '/develop/api-reference/collections/list': '/cache/develop/api-reference/list-collections',
    '/develop/api-reference/collections/sets': '/cache/develop/api-reference/set-collections',
    '/develop/api-reference/auth-tokens': '/cache/develop/api-reference/auth',
    '/develop/datatypes': '/cache/develop/basics/datatypes',
    '/topics/develop/integrations/aws-secrets-manager': '/topics/integrations/aws-secrets-manager',
    //This redirects from the pre v1.5.0 of the docs for the Topics page to the home page for the topics service /topics.
    '/introduction/momento-topics': '/topics',
    //This redirects from the pre v1.5.0 docs api-reference/topics page to the new /topics/develop/api-reference page.
    '/develop/api-reference/topics': '/topics/develop/api-reference',
    //This redirects users from the pre v1.5.0 docs location of the Node.js topics cheat sheet to the new location under /topics.
    '/develop/sdks/nodejs/topics-cheat-sheet': '/sdks/nodejs/topics',
    '/topics/webhooks': '/topics/webhooks/overview',
    '/topics/develop/patterns/asynchronous-processing': '/topics/patterns/running-background-tasks',
    //Adds redirects from the removed leaderboards 'Develop' folder
    '/leaderboards/develop/api-reference': '/leaderboards/api-reference',
    '/leaderboards/develop/language-support': '/leaderboards/language-support',
    // we moved all of the SDKs to the top level
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
    // remove MVI
    '/vector-index': '/',
    '/vector-index/*': '/',
};

export const REDIRECT_OPTIONS: Options = {
    redirects: Object.entries(REDIRECTS).map(([from, to]) => ({ from, to })),

    // This came in with v1.5.0 of the docs where we split out by service.
    // This function redirects anything coming into /develop, /learn, /manage, or /introduction to /cache/<directory>.
    createRedirects(existingPath) {
        if (existingPath.startsWith("/vector-index")) {
            return [existingPath.replace("/", "/vector-index")];
        }

        if (existingPath.includes('/develop') || existingPath.includes('/learn') || existingPath.includes('/manage') || existingPath.includes('/introduction')) {
            return [
                existingPath.replace('/cache/develop', '/develop'),
                existingPath.replace('/cache/learn', '/learn'),
                existingPath.replace('/cache/manage', '/manage'),
                existingPath.replace('/cache/introduction', '/introduction'),
            ];
        }
        return undefined; // Return a falsy value: no redirect created
    },
};