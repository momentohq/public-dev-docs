import {SnippetResolver} from '../snippet-resolver';
import {
  ExampleLanguage,
  ExampleSnippetId,
  ExampleSnippetType,
} from '../examples';

export class FallbackLegacySnippetResolver implements SnippetResolver {
  // for this POC, here we define some hard-coded example snippets.  In the real, working version of this plugin,
  // there would be some code to pull this stuff from the sdk git repos.
  //
  // Even for the hard-coded snippets that we keep in this repo until the SDK repos are all ready for this stuff,
  // this format is not very good.  I will improve it in the next PR.
  private readonly temporaryHardCodedCodeSnippets: Map<
    string,
    Map<ExampleSnippetType, Map<ExampleLanguage, string>>
  > = new Map([
    [
      'API_Set',
      new Map([
        [
          ExampleSnippetType.CODE,
          new Map([
            [
              ExampleLanguage.JAVASCRIPT,
              `
const authToken="eyJhbGc.MyTestToken";
const defaultTTL = 15;
const momento = new SimpleCacheClient(authToken, defaultTtl);
momento.set('test-cache', 'test-key', 'test-value');
`,
            ],
            [
              ExampleLanguage.PYTHON,
              `
import momento.simple_cache_client as scc\n
_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
_ITEM_DEFAULT_TTL_SECONDS = 15\n
with scc.SimpleCacheClient(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:
    cache_client.set('test-cache', 'test-key', 'test-value')
`,
            ],
            [
              ExampleLanguage.JAVA,
              `
String MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";
int DEFAULT_ITEM_TTL_SECONDS = 15;\n
SimpleCacheClient simpleCacheClient = SimpleCacheClient
    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)
    .build()\n
simpleCacheClient.set('test-cache', 'test-key', 'test-value');
    `,
            ],
            [
              ExampleLanguage.GO,
              `
const (
    authToken             = "eyJhbGc.MyTestToken"
    itemDefaultTtlSeconds = 15
)
client, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)
if err != nil {
    panic(err)
}
_, err = client.Set(&CacheSetRequest{
    CacheName: "test-cache",
    Key:       "test-key",
    Value:     "test-value",
})
    `,
            ],
            [
              ExampleLanguage.CSHARP,
              `
TimeSpan DEFAULT_TTL = TimeSpan.FromSeconds(15);
ICredentialProvider authProvider = new StringMomentoTokenProvider("eyJhbGc.MyTestToken");
using SimpleCacheClient client = new SimpleCacheClient(Configurations.Laptop.Latest(), authProvider, DEFAULT_TTL);
await client.SetAsync("test-cache", "test-key", "test-value");
    `,
            ],
            [
              ExampleLanguage.RUST,
              `
let auth_token = "eyJhbGc.MyTestToken";
let item_default_ttl_seconds = 15;
let mut cache_client = SimpleCacheClientBuilder::new(
    auth_token,
    NonZeroU64::new(item_default_ttl_seconds).unwrap(),
)
.unwrap()
.build();\n
let cache_name = String::from("cache");
let key = String::from("my_key");
let value = String::from("my_value");
cache_client
    .set(&cache_name, key.clone(), value.clone(), None)
    .await
    .unwrap();
    `,
            ],
            [
              ExampleLanguage.RUBY,
              `
require 'momento'
MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
DEFAULT_TTL_SECONDS = 15
client = Momento::SimpleCacheClient.new(
  auth_token: MOMENTO_AUTH_TOKEN, default_ttl: DEFAULT_TTL_SECONDS
)
response = client.set('test-cache', 'test-key', 'test-value')
raise response.error if response.error?
  `,
            ],
            [
              ExampleLanguage.CLI,
              'momento cache set --key test-key --value test-value',
            ],
          ]),
        ],
      ]),
    ],
  ]);

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: ExampleSnippetId
  ): string | undefined {
    return this.temporaryHardCodedCodeSnippets
      .get(snippetId)
      ?.get(snippetType)
      ?.get(language);
  }
}
