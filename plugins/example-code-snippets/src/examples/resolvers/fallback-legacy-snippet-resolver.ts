import {SnippetResolver} from '../snippet-resolver';
import {ExampleLanguage, ExampleSnippetType} from '../examples';

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
      'API_CreateCache',
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
momento.createCache('test-cache');
`,
            ],
            [
              ExampleLanguage.PYTHON,
              `
import momento.simple_cache_client as scc\n
_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
_ITEM_DEFAULT_TTL_SECONDS = 15\n
with scc.SimpleCacheClient(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:
    cache_client.create_cache('test-cache')
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
simpleCacheClient.createCache("test-cache");
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
err = client.CreateCache(&momento.CreateCacheRequest{
    CacheName: "test-cache",
})
    `,
            ],
            [
              ExampleLanguage.CSHARP,
              `
TimeSpan DEFAULT_TTL = TimeSpan.FromSeconds(15);
ICredentialProvider authProvider = new StringMomentoTokenProvider("eyJhbGc.MyTestToken");
using SimpleCacheClient client = new SimpleCacheClient(Configurations.Laptop.Latest(), authProvider, DEFAULT_TTL);
await client.CreateCacheAsync("test-cache");
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
let cache_name = String::from("test-cache");
match cache_client.create_cache(&cache_name).await {
    Ok(_) => {}
    Err(err) => {
        eprintln!("{}", err);
    }
}
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
response = client.create_cache('test-cache')
raise repsonse.error if response.error?
  `,
            ],
            [ExampleLanguage.CLI, 'momento cache create --name test-cache'],
          ]),
        ],
      ]),
    ],
    [
      'API_DeleteCache',
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
momento.deleteCache('test-cache');
`,
            ],
            [
              ExampleLanguage.PYTHON,
              `
import momento.simple_cache_client as scc\n
_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
_ITEM_DEFAULT_TTL_SECONDS = 15\n
with scc.SimpleCacheClient(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:
    cache_client.delete_cache('test-cache')
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
simpleCacheClient.deleteCache("test-cache");
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
err = client.DeleteCache(&momento.CreateCacheRequest{
    CacheName: "test-cache",
})
    `,
            ],
            [
              ExampleLanguage.CSHARP,
              `
TimeSpan DEFAULT_TTL = TimeSpan.FromSeconds(15);
ICredentialProvider authProvider = new StringMomentoTokenProvider("eyJhbGc.MyTestToken");
using SimpleCacheClient client = new SimpleCacheClient(Configurations.Laptop.Latest(), authProvider, DEFAULT_TTL);
await client.DeleteCacheAsync("test-cache");
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
let cache_name = String::from("test-cache");
match cache_client.delete_cache(&cache_name).await {
    Ok(_) => {}
    Err(err) => {
        eprintln!("{}", err);
    }
}
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
response = client.delete_cache('test-cache')
raise repsonse.error if response.error?
  `,
            ],
            [
              ExampleLanguage.CLI,
              'momento cache delete-cache --name test-cache',
            ],
          ]),
        ],
      ]),
    ],
    [
      'API_ListCaches',
      new Map([
        [
          ExampleSnippetType.CODE,
          new Map([
            [
              ExampleLanguage.RUBY,
              `
require 'momento'
MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
DEFAULT_TTL_SECONDS = 15
client = Momento::SimpleCacheClient.new(
  auth_token: MOMENTO_AUTH_TOKEN, default_ttl: DEFAULT_TTL_SECONDS
)
puts client.caches.to_a.join(", ")
  `,
            ],
            [ExampleLanguage.CLI, 'momento cache list'],
          ]),
        ],
      ]),
    ],
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
    [
      'API_Get',
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
momento.get('test-cache', 'test-key');
`,
            ],
            [
              ExampleLanguage.PYTHON,
              `
import momento.simple_cache_client as scc\n
_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
_ITEM_DEFAULT_TTL_SECONDS = 15\n
with scc.SimpleCacheClient(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:
    cache_client.get('test-cache', 'test-key')
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
simpleCacheClient.get('test-cache', 'test-key');
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
_, err = client.Get(&CacheSetRequest{
    CacheName: "test-cache",
    Key:       "test-key",
})
    `,
            ],
            [
              ExampleLanguage.CSHARP,
              `
TimeSpan DEFAULT_TTL = TimeSpan.FromSeconds(15);
ICredentialProvider authProvider = new StringMomentoTokenProvider("eyJhbGc.MyTestToken");
using SimpleCacheClient client = new SimpleCacheClient(Configurations.Laptop.Latest(), authProvider, DEFAULT_TTL);
await client.GetAsync("test-cache", "test-key");
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
    .get(&cache_name, key.clone())
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
response = client.get('test-cache', 'test-key')
if response.hit?
  puts response.value_string
elsif response.miss?
  puts "The item was not in the cache."
elsif response.error?
  raise response.error
end
  `,
            ],
            [
              ExampleLanguage.CLI,
              'momento cache get --key test-key --value test-value',
            ],
          ]),
        ],
      ]),
    ],
    [
      'API_Delete',
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
momento.delete('test-cache', 'test-key');
`,
            ],
            [
              ExampleLanguage.PYTHON,
              `
import momento.simple_cache_client as scc\n
_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"
_ITEM_DEFAULT_TTL_SECONDS = 15\n
with scc.SimpleCacheClient(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:
    cache_client.delete('test-cache', 'test-key')
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
simpleCacheClient.delete('test-cache', 'test-key');
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
_, err = client.Delete(&CacheSetRequest{
    CacheName: "test-cache",
    Key:       "test-key",
})
    `,
            ],
            [
              ExampleLanguage.CSHARP,
              `
TimeSpan DEFAULT_TTL = TimeSpan.FromSeconds(15);
ICredentialProvider authProvider = new StringMomentoTokenProvider("eyJhbGc.MyTestToken");
using SimpleCacheClient client = new SimpleCacheClient(Configurations.Laptop.Latest(), authProvider, DEFAULT_TTL);
await client.DeleteAsync("test-cache", "test-key");
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
    .delete(&cache_name, key.clone())
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
response = client.delete('test-cache', 'test-key')
raise response.error if response.error?
  `,
            ],
            [
              ExampleLanguage.CLI,
              'momento cache delete --key test-key --value test-value',
            ],
          ]),
        ],
      ]),
    ],
  ]);

  resolveSnippet(
    language: ExampleLanguage,
    snippetType: ExampleSnippetType,
    snippetId: string
  ): string | undefined {
    return this.temporaryHardCodedCodeSnippets
      .get(snippetId)
      ?.get(snippetType)
      ?.get(language);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFileContent(language: ExampleLanguage, file: string): string | undefined {
    return undefined;
  }
}
