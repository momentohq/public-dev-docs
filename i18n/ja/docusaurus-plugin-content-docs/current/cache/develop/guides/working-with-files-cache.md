---
sidebar_position: 4
sidebar_label: File の扱い
title: Momento Cacheを使ったファイルの追加と取得
description: コードサンプルを使って Momento Cache にファイルを追加し、取得する方法を説明しています。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Momento Cacheを使ったファイルの追加と取得

Momento Cacheのアイテムはバイト配列なので、[アイテムあたりの上限1MB](/cache/manage/limits)以内であれば、作成したいファイルのほとんどを簡単にキャッシュに保存することができます。

以下は、ファイルシステムからファイルを読み込み、そのファイルをキャッシュのアイテムに保存し、キャッシュから読み込んでからファイルシステムに書き込む例です。

<Tabs>
  <TabItem value="js" label="JavaScript">
    <SdkExampleCodeBlock language={"javascript"} file={"examples/nodejs/cache/doc-example-files/working-with-files.ts"} />
  </TabItem>
  
  <TabItem value="py" label="Python">
    ```python
    import os
    from datetime import timedelta
    from momento import CacheClient, Configurations, CredentialProvider
    from momento.responses import CacheGet, CacheSet

    file_path = './myfile.json'
    file_name = 'myfile'
    CACHE_NAME = 'test-cache'

    # Read a file from the filesystem
    def read_file(file_path):
        with open(file_path, 'rb') as file:
            byte_array = file.read()
        return byte_array

    # Write a file to the filesystem
    def write_file(file_path, data):
        with open(file_path, "wb") as out_file:
            out_file.write(data)

    # Get a connection to and existing cache with your API key.
    def client():
        momento_api_key = CredentialProvider.from_environment_variable('MOMENTO_API_KEY')
        momento_ttl_seconds = os.getenv('MOMENTO_TTL_SECONDS')
        ttl  = timedelta(seconds=int(momento_ttl_seconds))

        config = {
          'configuration': Configurations.Laptop.v1(),
          'credential_provider': momento_api_key,
          'default_ttl':  ttl
        }
        return CacheClient.create(**config)

    def run():
        # read the file contents in. They already come in byte format, so no casting necessary
        byte_array = read_file(file_path)

        # Get the client connection object.
        with client() as cache_client:
            # write the file to the cache
            set_response = cache_client.set(CACHE_NAME, file_name, byte_array)
            if isinstance(set_response, CacheSet.Success):
                print('Key stored successfully!')
            elif isinstance(set_response, CacheSet.Error):
                print(f'Error setting key: {set_response}')
            else:
                print(f'Some other error: {set_response}')

            # read the file from the cache
            file_response = cache_client.get(CACHE_NAME, file_name)
            if isinstance(file_response, CacheGet.Hit):
                print(f'Cache hit! The value is: {file_response.value_string}')
                buffer = bytes(file_response.value_string, 'utf-8')
                print('Writing file to filesystem.')
                write_file("./myfile2.json", buffer)
            elif isinstance(file_response, CacheGet.Miss):
                print('cache miss')
            elif isinstance(file_response, CacheGet.Error):
                print(f'Error: {file_response.message()}')

    if __name__ == '__main__':
        run()
    ```
  </TabItem>
</Tabs>

Node.jsSDKの使い方については、[Node.jsチートシート](/platform/sdks/nodejs/cache.mdx)をご覧ください。

Python SDKの使い方については、[Pythonチートシート](/platform/sdks/python/cache.md)をご覧ください。
