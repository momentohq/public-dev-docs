import {
  githubRepoNameForSdk,
  SdkGithubRepoSourceProvider,
} from '../sdk-source/sdk-github-repo-source-provider';
import {Sdk} from '../sdk-source/sdks';
import fs from 'fs';
import {simpleGit} from 'simple-git';

async function prepareSdkSourceDir(sdk: Sdk): Promise<string> {
  const gitCloner = simpleGit();
  const repoName = githubRepoNameForSdk(sdk);
  const sourceProvider = new SdkGithubRepoSourceProvider();
  const sdkRepoDir = sourceProvider.sdkSourceDir(sdk);

  if (!fs.existsSync(sdkRepoDir)) {
    console.log(`Cloning repo into ${sdkRepoDir}`);
    await gitCloner.clone(
      `git@github.com:momentohq/${repoName}.git`,
      sdkRepoDir
    );
  } else {
    console.log(`Pulling latest revision for dir ${sdkRepoDir}`);
    const sdkGit = simpleGit(sdkRepoDir);
    await sdkGit.pull();
  }
  return sdkRepoDir;
}
async function main() {
  for (const sdkVal in Sdk) {
    const sdk: Sdk = Sdk[sdkVal as keyof typeof Sdk];
    await prepareSdkSourceDir(sdk);
  }
}

main().catch(e => {
  throw e;
});
