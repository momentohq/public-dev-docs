import {Sdk, sdkDisplayName} from '../examples/sdk-source/sdks';
import * as path from 'path';
import {SdkSourceProvider} from '../examples/sdk-source/sdk-source-provider';
import {SdkGithubRepoSourceProvider} from '../examples/sdk-source/sdk-github-repo-source-provider';
import * as fs from 'fs';
import {heading, Heading, table, Table} from '../utils/markdown-nodes';

interface SdkInfo {
  sdk: Sdk;
  cacheClientFile: string | Array<string>;
  configObjectFile?: string;
  topicClientFile?: string;
}

const SDKS: Array<SdkInfo> = [
  {
    sdk: Sdk.NODEJS,
    cacheClientFile: [
      'packages/client-sdk-nodejs/src/cache-client.ts',
      'packages/core/src/internal/clients/cache/AbstractCacheClient.ts',
    ],
    configObjectFile: 'packages/client-sdk-nodejs/src/config/configuration.ts',
    topicClientFile: 'packages/client-sdk-nodejs/src/topic-client.ts',
  },
  {
    sdk: Sdk.WEB,
    cacheClientFile: [
      'packages/client-sdk-web/src/cache-client.ts',
      'packages/core/src/internal/clients/cache/AbstractCacheClient.ts',
    ],
    configObjectFile: undefined,
    topicClientFile: undefined,
  },
  {
    sdk: Sdk.DOTNET,
    cacheClientFile: 'src/Momento.Sdk/ICacheClient.cs',
    configObjectFile: 'src/Momento.Sdk/Config/Configuration.cs',
    topicClientFile: undefined,
  },
  {
    sdk: Sdk.PYTHON,
    cacheClientFile: 'src/momento/cache_client_async.py',
    configObjectFile: 'src/momento/config/configuration.py',
    topicClientFile: undefined,
  },
  {
    sdk: Sdk.GO,
    cacheClientFile: 'momento/cache_client.go',
    configObjectFile: 'config/config.go',
    topicClientFile: 'momento/topic_client.go',
  },
  {
    sdk: Sdk.JAVA,
    cacheClientFile: 'momento-sdk/src/main/java/momento/sdk/CacheClient.java',
    configObjectFile:
      'momento-sdk/src/main/java/momento/sdk/config/Configuration.java',
    topicClientFile: undefined,
  },
  {
    sdk: Sdk.PHP,
    cacheClientFile: 'src/Cache/CacheClient.php',
    configObjectFile: 'src/Config/Configuration.php',
    topicClientFile: undefined,
  },
  {
    sdk: Sdk.RUST,
    cacheClientFile: 'src/simple_cache_client.rs',
    configObjectFile: undefined,
    topicClientFile: 'src/preview/topics.rs',
  },
  {
    sdk: Sdk.RUBY,
    cacheClientFile: 'lib/momento/simple_cache_client.rb',
    configObjectFile: undefined,
    topicClientFile: undefined,
  },
];

type Api = string | {displayName: string; functionName: string | RegExp};

interface ApiGroup {
  groupName: string;
  apis: Array<Api>;
}

const CONFIG_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Configuration',
    apis: [
      {
        displayName: 'ClientTimeout',
        functionName: / withclienttimeout(?:millis)?\(/,
      },
      {displayName: 'Retries', functionName: 'withRetryStrategy'},
      {displayName: 'Middleware', functionName: 'withMiddlewares'},
    ],
  },
];

const CACHE_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Global',
    apis: [
      'ping',
      'flushCache',
      'keysExist',
      'keyExists',
      'delete',
      'updateTtl',
      'increaseTtl',
      'decreaseTtl',
    ],
  },
  {
    groupName: 'Scalars',
    apis: ['get', 'set', 'setIfNotExists', 'increment'],
  },
  {
    groupName: 'Lists',
    apis: [
      'listConcatenateBack',
      'listConcatenateFront',
      'listFetch',
      'listLength',
      'listPopBack',
      'listPopFront',
      'listPushBack',
      'listPushFront',
      'listRemoveValue',
      'listRetain',
    ],
  },
  {
    groupName: 'Dictionaries',
    apis: [
      'dictionaryFetch',
      'dictionaryGetField',
      'dictionaryGetFields',
      'dictionaryIncrement',
      'dictionaryRemoveField',
      'dictionaryRemoveFields',
      'dictionarySetField',
      'dictionarySetFields',
    ],
  },
  {
    groupName: 'Sets',
    apis: [
      'setAddElement',
      'setAddElements',
      'setFetch',
      'setRemoveElement',
      'setRemoveElements',
      'setContainsElement',
      'setContainsElements',
    ],
  },
  {
    groupName: 'Sorted Sets',
    apis: [
      'sortedSetFetchByRank',
      'sortedSetFetchByScore',
      'sortedSetGetRank',
      'sortedSetGetScore',
      'sortedSetGetScores',
      'sortedSetIncrementScore',
      'sortedSetPutElement',
      'sortedSetPutElements',
      'sortedSetRemoveElement',
      'sortedSetRemoveElements',
    ],
  },
  {
    groupName: 'Signing Keys',
    apis: ['createSigningKey', 'listSigningKeys', 'revokeSigningKey'],
  },
  {groupName: 'SSO', apis: ['generateApiToken']},
];

const TOPIC_API_GROUPS: Array<ApiGroup> = [
  {groupName: 'Topics', apis: ['subscribe', 'publish']},
];

export class ApiSupportMatrixGenerator {
  generateApiMatrixMarkdownNodes(): Array<Heading | Table> {
    const sourceProvider: SdkSourceProvider = new SdkGithubRepoSourceProvider();

    const allSdksCacheApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksConfigApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksTopicsApiSupport = new Map<string, Map<string, boolean>>();

    for (const sdk of SDKS) {
      const sdkRepoDir = sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();
      console.log(`Checking sdk: ${sdkName}`);

      const cacheApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.cacheClientFile,
        CACHE_API_GROUPS
      );
      allSdksCacheApiSupport.set(sdkName, cacheApiSupport);
      const configApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.configObjectFile,
        CONFIG_API_GROUPS
      );
      allSdksConfigApiSupport.set(sdkName, configApiSupport);
      const topicApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.topicClientFile,
        TOPIC_API_GROUPS
      );
      allSdksTopicsApiSupport.set(sdkName, topicApiSupport);
    }

    const nodes: Array<Heading | Table> = [];
    nodes.push(...renderApiGroups(CACHE_API_GROUPS, allSdksCacheApiSupport));
    nodes.push(...renderApiGroups(TOPIC_API_GROUPS, allSdksTopicsApiSupport));
    nodes.push(...renderApiGroups(CONFIG_API_GROUPS, allSdksConfigApiSupport));
    return nodes;
  }
}

function renderApiGroups(
  apiGroups: Array<ApiGroup>,
  allSdksApiSupport: Map<string, Map<string, boolean>>
): Array<Heading | Table> {
  const nodes: Array<Heading | Table> = [];
  for (const apiGroup of apiGroups) {
    nodes.push(heading(apiGroup.groupName, 3));
    nodes.push(
      table([
        ['Feature', ...SDKS.map(s => sdkDisplayName(s.sdk))],
        ...apiGroup.apis.map(api => {
          const displayName = typeof api === 'string' ? api : api.displayName;
          return [
            displayName,
            ...SDKS.map(sdk => {
              if (
                allSdksApiSupport.get(sdk.sdk.valueOf())?.get(displayName) ===
                true
              ) {
                return '✅';
              } else {
                return '❌';
              }
            }),
          ];
        }),
      ])
    );
  }
  return nodes;
}

function determineApiSupport(
  sdkRepoDir: string,
  codeFile: string | Array<string> | undefined,
  apiGroups: Array<ApiGroup>
): Map<string, boolean> {
  const apiSupport = new Map<string, boolean>();
  for (const apiGroup of apiGroups) {
    for (const api of apiGroup.apis) {
      const displayName = typeof api === 'string' ? api : api.displayName;
      apiSupport.set(displayName, false);
    }
  }

  if (codeFile === undefined) {
    return apiSupport;
  }

  const codeFiles: Array<string> =
    typeof codeFile === 'string' ? [codeFile] : codeFile;

  for (const f of codeFiles) {
    const clientCodeFile = path.join(sdkRepoDir, f);
    // this is silly and inefficient, reading the whole file into memory at once.  However,
    // it was feeling pretty tricky to call async functions from the remark plugin, and there
    // is no sane way that I could find to do synchronous line-by-line iteration over file
    // contents in node.js.  So we are just slurping the whole thing into memory for now,
    // can revisit later if we need to.
    const lines = fs.readFileSync(clientCodeFile).toString().split('\n');
    for (const line of lines) {
      if (line.trim().startsWith('//')) continue;
      if (line.trim().startsWith('#')) continue;
      const unSnaked = line.replaceAll('_', '');
      const unAsynced = unSnaked.replaceAll('Async(', '(');
      for (const apiGroup of apiGroups) {
        for (const api of apiGroup.apis) {
          const functionName = typeof api === 'string' ? api : api.functionName;
          const displayName = typeof api === 'string' ? api : api.displayName;
          const apiFound =
            typeof functionName === 'string'
              ? unAsynced
                  .toLowerCase()
                  .includes(` ${functionName.toLowerCase()}(`)
              : unAsynced.toLowerCase().match(functionName);

          if (apiFound) {
            apiSupport.set(displayName, true);
          }
        }
      }
    }
  }
  console.log(
    `Done scanning client files '${JSON.stringify(
      codeFile
    )}'.  Supported APIs: ${JSON.stringify(
      Object.fromEntries(apiSupport),
      null,
      2
    )}`
  );
  return apiSupport;
}
