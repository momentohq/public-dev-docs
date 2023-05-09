/**
 * This is the registry of all of the SDKs that we may inject example snippets for.
 */
export enum Sdk {
  NODEJS = 'nodejs',
  WEB = 'web',
  DOTNET = 'dotnet',
  PYTHON = 'python',
  GO = 'go',
  JAVA = 'java',
  PHP = 'php',
  RUST = 'rust',
  RUBY = 'ruby',
  CLI = 'cli',
}

export function sdkDisplayName(sdk: Sdk): string {
  switch (sdk) {
    case Sdk.NODEJS:
      return 'Node.js';
    case Sdk.WEB:
      return 'Web';
    case Sdk.DOTNET:
      return '.NET';
    case Sdk.PYTHON:
      return 'Python';
    case Sdk.GO:
      return 'Go';
    case Sdk.JAVA:
      return 'Java';
    case Sdk.PHP:
      return 'PHP';
    case Sdk.RUST:
      return 'Rust';
    case Sdk.RUBY:
      return 'Ruby';
    case Sdk.CLI:
      return 'Cli';
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unrecognized SDK: ${sdk}`);
  }
}
