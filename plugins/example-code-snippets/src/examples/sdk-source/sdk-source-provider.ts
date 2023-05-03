import {Sdk} from './sdks';

export interface SdkSourceProvider {
  sdkSourceDir(sdk: Sdk): string;
}
