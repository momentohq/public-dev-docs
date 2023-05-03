import {SdkSourceProvider} from './sdk-source-provider';
import {Sdk} from './sdks';
import * as path from 'path';

const SDK_GIT_REPOS_DIR = path.join(__dirname, '../../../../../sdk-git-repos');

export class SdkGithubRepoSourceProvider implements SdkSourceProvider {
  sdkSourceDir(sdk: Sdk): string {
    const repoName = githubRepoNameForSdk(sdk);
    return path.join(SDK_GIT_REPOS_DIR, repoName);
  }
}

export function githubRepoNameForSdk(sdk: Sdk): string {
  switch (sdk) {
    case Sdk.NODEJS:
      return 'client-sdk-nodejs';
    case Sdk.WEB:
      return 'client-sdk-nodejs';
    case Sdk.DOTNET:
      return 'client-sdk-dotnet';
    case Sdk.PYTHON:
      return 'client-sdk-python';
    case Sdk.GO:
      return 'client-sdk-go';
    case Sdk.JAVA:
      return 'client-sdk-java';
    case Sdk.PHP:
      return 'client-sdk-php';
    case Sdk.RUST:
      return 'client-sdk-rust';
    case Sdk.RUBY:
      return 'client-sdk-ruby';
    case Sdk.CLI:
      return 'momento-cli';
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized SDK: ${sdk}`);
  }
}
