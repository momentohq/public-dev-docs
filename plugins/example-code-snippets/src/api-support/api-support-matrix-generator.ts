import {Sdk, sdkDisplayName} from '../examples/sdk-source/sdks';
import * as path from 'path';
import {SdkSourceProvider} from '../examples/sdk-source/sdk-source-provider';
import {SdkGithubRepoSourceProvider} from '../examples/sdk-source/sdk-github-repo-source-provider';
import * as fs from 'fs';
import {
  heading,
  Heading,
  Paragraph,
  paragraph,
  table,
  Table,
} from '../utils/markdown-nodes';

interface SdkInfo {
  sdk: Sdk;
  cacheClientFile: string | Array<string>;
  configObjectFile: string | undefined;
  topicClientFile: string | undefined;
  authClientFile: string | undefined;
  leaderboardClientFile: Array<string> | undefined;
  storageClientFile: string | undefined;
}

const SDKS: Array<SdkInfo> = [
  {
    sdk: Sdk.NODEJS,
    cacheClientFile: [
      'packages/client-sdk-nodejs/src/cache-client.ts',
      'packages/core/src/internal/clients/cache/AbstractCacheClient.ts',
    ],
    configObjectFile: 'packages/client-sdk-nodejs/src/config/configuration.ts',
    topicClientFile: 'packages/core/src/clients/ITopicClient.ts',
    authClientFile: 'packages/core/src/clients/IAuthClient.ts',
    leaderboardClientFile: [
      'packages/core/src/internal/clients/leaderboard/AbstractLeaderboard.ts',
    ],
    storageClientFile:
      'packages/core/src/internal/clients/storage/AbstractStorageClient.ts',
  },
  {
    sdk: Sdk.WEB,
    cacheClientFile: [
      'packages/client-sdk-web/src/cache-client.ts',
      'packages/core/src/internal/clients/cache/AbstractCacheClient.ts',
    ],
    configObjectFile: 'packages/client-sdk-web/src/config/configuration.ts',
    topicClientFile: 'packages/core/src/clients/ITopicClient.ts',
    authClientFile: 'packages/core/src/clients/IAuthClient.ts',
    leaderboardClientFile: [
      'packages/core/src/internal/clients/leaderboard/AbstractLeaderboard.ts',
    ],
    storageClientFile:
      'packages/core/src/internal/clients/storage/AbstractStorageClient.ts',
  },
  {
    sdk: Sdk.DOTNET,
    cacheClientFile: 'src/Momento.Sdk/ICacheClient.cs',
    configObjectFile: 'src/Momento.Sdk/Config/Configuration.cs',
    topicClientFile: 'src/Momento.Sdk/ITopicClient.cs',
    authClientFile: 'src/Momento.Sdk/IAuthClient.cs',
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.PYTHON,
    cacheClientFile: 'src/momento/cache_client_async.py',
    configObjectFile: 'src/momento/config/configuration.py',
    topicClientFile: 'src/momento/topic_client_async.py',
    authClientFile: 'src/momento/auth_client_async.py',
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.GO,
    cacheClientFile: 'momento/cache_client.go',
    configObjectFile: 'config/config.go',
    topicClientFile: 'momento/topic_client.go',
    authClientFile: 'momento/auth_client.go',
    leaderboardClientFile: [
      'momento/leaderboard.go',
      'momento/leaderboard_client.go',
    ],
    storageClientFile: 'momento/storage_client.go',
  },
  {
    sdk: Sdk.JAVA,
    cacheClientFile: 'momento-sdk/src/main/java/momento/sdk/CacheClient.java',
    configObjectFile:
      'momento-sdk/src/main/java/momento/sdk/config/Configuration.java',
    topicClientFile: 'momento-sdk/src/main/java/momento/sdk/TopicClient.java',
    authClientFile: 'momento-sdk/src/main/java/momento/sdk/AuthClient.java',
    leaderboardClientFile: [
      'momento-sdk/src/main/java/momento/sdk/ILeaderboard.java',
      'momento-sdk/src/main/java/momento/sdk/LeaderboardClient.java',
    ],
    storageClientFile:
      'momento-sdk/src/main/java/momento/sdk/PreviewStorageClient.java',
  },
  {
    sdk: Sdk.KOTLIN,
    cacheClientFile:
      'src/commonMain/kotlin/software/momento/kotlin/sdk/CacheClient.kt',
    configObjectFile:
      'src/commonMain/kotlin/software/momento/kotlin/sdk/config/Configuration.kt',
    topicClientFile:
      'src/commonMain/kotlin/software/momento/kotlin/sdk/TopicClient.kt',
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.ELIXIR,
    cacheClientFile: 'src/lib/momento/cache_client.ex',
    configObjectFile: 'src/lib/momento/config/configuration.ex',
    topicClientFile: undefined,
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.PHP,
    cacheClientFile: 'src/Cache/CacheClient.php',
    configObjectFile: 'src/Config/Configuration.php',
    topicClientFile: undefined,
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: 'src/Storage/PreviewStorageClient.php',
  },
  {
    sdk: Sdk.RUST,
    cacheClientFile: 'src/cache/cache_client.rs',
    configObjectFile: 'src/cache/config/configuration.rs',
    topicClientFile: 'src/topics/topic_client.rs',
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: 'src/storage/preview_storage_client.rs',
  },
  {
    sdk: Sdk.RUBY,
    cacheClientFile: 'lib/momento/cache_client.rb',
    configObjectFile: 'lib/momento/config/configuration.rb',
    topicClientFile: undefined,
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.SWIFT,
    cacheClientFile: 'Sources/Momento/CacheClient.swift',
    configObjectFile: 'Sources/Momento/config/CacheConfiguration.swift',
    topicClientFile: 'Sources/Momento/TopicClient.swift',
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
  {
    sdk: Sdk.DART,
    cacheClientFile: 'lib/src/cache_client.dart',
    configObjectFile: 'lib/src/config/cache_configuration.dart',
    topicClientFile: 'lib/src/topic_client.dart',
    authClientFile: undefined,
    leaderboardClientFile: undefined,
    storageClientFile: undefined,
  },
];

type Api = string | {displayName: string; functionName: string | RegExp};

interface ApiGroup {
  groupName: string;
  groupDescription: string;
  apis: Array<Api>;
}

const CONFIG_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Configuration',
    groupDescription: 'A matrix of SDK support for Momento configuration APIs',
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
    groupDescription: 'A matrix of SDK support for Momento global APIs',
    apis: [
      'createCache',
      'listCaches',
      'flushCache',
      'deleteCache',
      'ping',
      'keysExist',
      'keyExists',
      'itemGetType',
      'updateTtl',
      'increaseTtl',
      'decreaseTtl',
      'itemGetTtl',
    ],
  },
  {
    groupName: 'Scalars',
    groupDescription: 'A matrix of SDK support for Momento scalar APIs',
    apis: [
      'get',
      'set',
      'delete',
      'setIfAbsent',
      'setIfPresent',
      'setIfEqual',
      'setIfNotEqual',
      'setIfAbsentOrEqual',
      'setIfPresentAndNotEqual',
      'increment',
      'getBatch',
      'setBatch',
      'getWithHash',
      'setwithHash',
      'setIfPresentAndHashEqual',
      'setIfPresentAndHashNotEqual',
      'setIfAbsentOrHashEqual',
      'setIfAbsentOrHashNotEqual',
    ],
  },
  {
    groupName: 'Lists',
    groupDescription: 'A matrix of SDK support for Momento list APIs.',
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
    groupDescription: 'A matrix of SDK support for Momento dictionary APIs.',
    apis: [
      'dictionaryFetch',
      'dictionaryLength',
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
    groupDescription: 'A matrix of SDK support for Momento set APIs',
    apis: [
      'setAddElement',
      'setAddElements',
      'setFetch',
      'setSample',
      'setLength',
      'setPop',
      'setRemoveElement',
      'setRemoveElements',
      'setContainsElement',
      'setContainsElements',
    ],
  },
  {
    groupName: 'Sorted Sets',
    groupDescription: 'A matrix of SDK support for Momento sorted set APIs',
    apis: [
      'sortedSetFetchByRank',
      'sortedSetFetchByScore',
      'sortedSetLength',
      'sortedSetLengthByScore',
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
    groupDescription: 'A matrix of SDK support for Momento signing key APIs',
    apis: ['createSigningKey', 'listSigningKeys', 'revokeSigningKey'],
  },
];

const TOPIC_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Topics',
    groupDescription: 'A matrix of SDK support for Momento Topics APIs',
    apis: ['subscribe', 'publish'],
  },
];

const AUTH_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Auth',
    groupDescription:
      'A matrix of SDK support for Momento API Key and auth token APIs',
    apis: ['generateApiKey', 'refreshApiKey', 'generateDisposableToken'],
  },
];

const LEADERBOARD_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Leaderboard',
    groupDescription: 'A matrix of SDK support for Momento Leaderboard APIs',
    apis: [
      'upsert',
      'fetchByScore',
      'fetchByRank',
      'getRank',
      'getCompetitionRank',
      'length',
      'removeElements',
      'delete',
    ],
  },
];

const STORAGE_API_GROUPS: Array<ApiGroup> = [
  {
    groupName: 'Storage',
    groupDescription: 'A matrix of SDK support for Momento Storage APIs',
    apis: [
      'createStore',
      'deleteStore',
      'listStores',
      {displayName: 'put', functionName: /put(?:string)?\(/},
      'get',
      'delete',
    ],
  },
];

export class ApiSupportMatrixGenerator {
  private sourceProvider: SdkSourceProvider;

  constructor() {
    this.sourceProvider = new SdkGithubRepoSourceProvider();
  }
  generateApiMatrixMarkdownNodes(
    matrixType: string
  ): Array<Heading | Paragraph | Table> {
    switch (matrixType) {
      case '%%%TOPICS_API_SUPPORT_MATRIX%%%': {
        return this.generateTopicsMatrixNodes();
      }
      case '%%%CACHE_API_SUPPORT_MATRIX%%%': {
        return this.generateCacheMatrixNodes();
      }
      case '%%%LEADERBOARD_API_SUPPORT_MATRIX%%%': {
        return this.generateLeaderboardMatrixNodes();
      }
      case '%%%STORAGE_API_SUPPORT_MATRIX%%%': {
        return this.generateStorageMatrixNodes();
      }
      case '%%%ALL_API_SUPPORT_MATRIX%%%': {
        return this.generateAllMatrixNodes();
      }
      default: {
        console.log('Unknown matrix type:', matrixType);
        return [];
      }
    }
  }

  generateAllMatrixNodes(): Array<Heading | Paragraph | Table> {
    const allSdksCacheApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksConfigApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksAuthApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksTopicsApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksLeaderboardApiSupport = new Map<
      string,
      Map<string, boolean>
    >();

    for (const sdk of SDKS) {
      const sdkRepoDir = this.sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();

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

      const authApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.authClientFile,
        AUTH_API_GROUPS
      );
      allSdksAuthApiSupport.set(sdkName, authApiSupport);

      const topicApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.topicClientFile,
        TOPIC_API_GROUPS
      );
      allSdksTopicsApiSupport.set(sdkName, topicApiSupport);

      const leaderboardApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.leaderboardClientFile,
        LEADERBOARD_API_GROUPS
      );
      allSdksLeaderboardApiSupport.set(sdkName, leaderboardApiSupport);
    }

    const nodes: Array<Heading | Paragraph | Table> = [];
    nodes.push(...renderApiGroups(CACHE_API_GROUPS, allSdksCacheApiSupport));

    nodes.push(...renderApiGroups(AUTH_API_GROUPS, allSdksAuthApiSupport));
    nodes.push(...renderApiGroups(CONFIG_API_GROUPS, allSdksConfigApiSupport));
    nodes.push(...renderApiGroups(TOPIC_API_GROUPS, allSdksTopicsApiSupport));
    nodes.push(
      ...renderApiGroups(LEADERBOARD_API_GROUPS, allSdksLeaderboardApiSupport)
    );
    return nodes;
  }

  generateCacheMatrixNodes(): Array<Heading | Paragraph | Table> {
    const allSdksCacheApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksConfigApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksAuthApiSupport = new Map<string, Map<string, boolean>>();

    for (const sdk of SDKS) {
      const sdkRepoDir = this.sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();

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
      const authApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.authClientFile,
        AUTH_API_GROUPS
      );
      allSdksAuthApiSupport.set(sdkName, authApiSupport);
    }

    const nodes: Array<Heading | Paragraph | Table> = [];
    nodes.push(...renderApiGroups(CACHE_API_GROUPS, allSdksCacheApiSupport));

    nodes.push(...renderApiGroups(AUTH_API_GROUPS, allSdksAuthApiSupport));
    nodes.push(...renderApiGroups(CONFIG_API_GROUPS, allSdksConfigApiSupport));
    return nodes;
  }

  generateTopicsMatrixNodes(): Array<Heading | Paragraph | Table> {
    const allSdksTopicsApiSupport = new Map<string, Map<string, boolean>>();
    const allSdksAuthApiSupport = new Map<string, Map<string, boolean>>();

    for (const sdk of SDKS) {
      const sdkRepoDir = this.sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();

      const topicApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.topicClientFile,
        TOPIC_API_GROUPS
      );
      allSdksTopicsApiSupport.set(sdkName, topicApiSupport);

      const authApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.authClientFile,
        AUTH_API_GROUPS
      );
      allSdksAuthApiSupport.set(sdkName, authApiSupport);
    }

    const nodes: Array<Heading | Paragraph | Table> = [];
    nodes.push(...renderApiGroups(TOPIC_API_GROUPS, allSdksTopicsApiSupport));
    nodes.push(...renderApiGroups(AUTH_API_GROUPS, allSdksAuthApiSupport));
    return nodes;
  }

  generateLeaderboardMatrixNodes(): Array<Heading | Paragraph | Table> {
    const allSdksLeaderboardApiSupport = new Map<
      string,
      Map<string, boolean>
    >();

    for (const sdk of SDKS) {
      const sdkRepoDir = this.sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();

      const leaderboardApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.leaderboardClientFile,
        LEADERBOARD_API_GROUPS
      );
      allSdksLeaderboardApiSupport.set(sdkName, leaderboardApiSupport);
    }

    const nodes: Array<Heading | Paragraph | Table> = [];
    nodes.push(
      ...renderApiGroups(LEADERBOARD_API_GROUPS, allSdksLeaderboardApiSupport)
    );
    return nodes;
  }

  generateStorageMatrixNodes(): Array<Heading | Paragraph | Table> {
    const allSdksStorageApiSupport = new Map<string, Map<string, boolean>>();

    for (const sdk of SDKS) {
      const sdkRepoDir = this.sourceProvider.sdkSourceDir(sdk.sdk);
      const sdkName = sdk.sdk.valueOf();

      const storageApiSupport = determineApiSupport(
        sdkRepoDir,
        sdk.storageClientFile,
        STORAGE_API_GROUPS
      );
      allSdksStorageApiSupport.set(sdkName, storageApiSupport);
    }

    const nodes: Array<Heading | Paragraph | Table> = [];
    nodes.push(
      ...renderApiGroups(STORAGE_API_GROUPS, allSdksStorageApiSupport)
    );

    return nodes;
  }
}

function renderApiGroups(
  apiGroups: Array<ApiGroup>,
  allSdksApiSupport: Map<string, Map<string, boolean>>
): Array<Heading | Paragraph | Table> {
  const nodes: Array<Heading | Paragraph | Table> = [];
  for (const apiGroup of apiGroups) {
    nodes.push(heading(apiGroup.groupName, 3));
    nodes.push(paragraph(apiGroup.groupDescription));
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
      const unGenericked = unSnaked.replaceAll(/<[^>]+>/g, '');
      const unAsynced = unGenericked.replaceAll('Async(', '(');
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
  // console.log(
  //   `Done scanning client files '${JSON.stringify(
  //     codeFile
  //   )}'.  Supported APIs: ${JSON.stringify(
  //     Object.fromEntries(apiSupport),
  //     null,
  //     2
  //   )}`
  // );
  return apiSupport;
}
