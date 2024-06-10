---
sidebar_position: 4
sidebar_label: Working with files
title: Adding and retrieving files in a cache
description: Learn to add and retrieve files from Momento Cache with hands on code samples.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Momento Cacheを使ったファイルの追加と取得

Momento Cacheのアイテムはバイト配列なので、[アイテムあたりの上限1MB](./../../limits)以内であれば、作成したいファイルのほとんどを簡単にキャッシュに保存することができます。

以下は、ファイルシステムからファイルを読み込み、そのファイルをキャッシュのアイテムに保存し、キャッシュから読み込んでからファイルシステムに書き込む例です。
  <Tabs>
    <TabItem value="nodejs" label="Node.js" default>

```javascript
const fs = require('fs');
const { CacheClient, CacheGet, CacheSet, Configurations, CredentialProvider } = require('@gomomento/sdk');
const dotenv = require('dotenv');

dotenv.config();

const filePath = './myfile.json';
const fileName = 'myfile';
const CACHE_NAME = 'test-cache';

// Read a file from the filesystem
async function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return new Uint8Array(data);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
}

// Creates the Momento cache client object
async function createCacheClient() {
  return CacheClient.create({
    configuration: Configurations.Laptop.v1(),
    credentialProvider: CredentialProvider.fromEnvironmentVariable({
      environmentVariableName: 'MOMENTO_API_KEY',
    }),
    defaultTtlSeconds: 600,
  });
}

async function writeToCache(client, cacheName, key, data) {
  const setResponse = await client.set(cacheName, key, data);
  if (setResponse instanceof CacheSet.Success) {
    console.log('Key stored successfully!');
  } else if (setResponse instanceof CacheSet.Error) {
    console.log(`Error setting key: ${setResponse.toString()}`);
  } else {
    console.log(`Some other error: ${setResponse.toString()}`);
  }
}

async function readFromCache(client, cacheName, key) {
  const fileResponse = await client.get(cacheName, key);
  if (fileResponse instanceof CacheGet.Hit) {
    console.log(`cache hit: ${fileResponse.valueString()}`);
    const contents = fileResponse.valueUint8Array();
    const buffer = Buffer.from(contents);
    fs.writeFileSync("./myfile2.json", buffer);
  } else if (fileResponse instanceof CacheGet.Miss) {
    console.log('cache miss');
  } else if (fileResponse instanceof CacheGet.Error) {
    console.log(`Error: ${fileResponse.message()}`);
  }
}

async function run() {
  const byteArray = await readFile(filePath);
  if (byteArray === null) {
    return;
  }

  const cacheClient = await createCacheClient();

  await writeToCache(cacheClient, CACHE_NAME, fileName, byteArray);
  await readFromCache(cacheClient, CACHE_NAME, fileName);
}

run();
```

Node.jsSDKの使い方については、[Node.jsチートシート](/sdks/nodejs/cache.mdx)をご覧ください。
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
    # print(config)
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

Python SDKの使い方については、[Pythonチートシート](/sdks/python/cache.md)をご覧ください。

   </TabItem>
</Tabs>
