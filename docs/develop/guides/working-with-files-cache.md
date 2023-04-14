---
sidebar_position: 4
sidebar_label: Working with files
title: Adding and retrieving files in a cache
description: Learn to add and retreive files with a Momento cache
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add and retrieve a file with Momento Cache
An item in Momento Cache is a byte array, so a cache can easily store most any file you want to write, as long as it is under the [per item limit of 1MB](/manage/limits).

Here is an example of reading a file from the filsystem, saving the file to an item in a cache, reading it from the cache, and then writing it to the filesystem.
  <Tabs>
    <TabItem value="nodejs" label="Node.js" default>

```javascript
const fs = require('fs');
const { CacheClient, CacheGet, CacheSet, 
    Configurations, CredentialProvider } = require('@gomomento/sdk');
const dotenv = require('dotenv');

dotenv.config();

const filePath = './myfile.json';
const fileName = 'myfile';

async function run(){

    const data = fs.readFileSync(filePath);
    // add your code to catch fs errors here.
    const byteArray = new Uint8Array(data);
    const CACHE_NAME = 'test-cache'

    const cacheClient = new CacheClient({
        configuration: Configurations.Laptop.v1(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({
          environmentVariableName: 'MOMENTO_AUTH_TOKEN',
        }),
        defaultTtlSeconds: 600,
    });

    // write the file to the cache
    const setResponse = await cacheClient.set(CACHE_NAME, fileName, byteArray);
    if (setResponse instanceof CacheSet.Success) {
        console.log('Key stored successfully!');
    } else if (setResponse instanceof CacheSet.Error){
        console.log(`Error setting key: ${setResponse.toString()}`);
    } else {
        console.log(`Some other error: ${setResponse.toString()}`);
    }

    // read the file from the cache
    const fileResponse = await cacheClient.get(CACHE_NAME, fileName);
    if (fileResponse instanceof CacheGet.Hit) {
        console.log(`cache hit: ${fileResponse.valueString()}`);
        const contents = fileResponse.valueUint8Array();
        const buffer = Buffer.from(contents);
        fs.writeFileSync("./myfile2.json", buffer)
      } else if (fileResponse instanceof CacheGet.Miss) {
        console.log('cache miss');
      } else if (fileResponse instanceof CacheGet.Error) {
        console.log(`Error: ${fileResponse.message()}`);
      }
}

run();
```

Check our [Node.js cheat sheet](/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md) for more on using our Node.js SDK.
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

def client():
    momento_auth_token = CredentialProvider.from_environment_variable('MOMENTO_AUTH_TOKEN')
    momento_ttl_seconds = os.getenv('MOMENTO_TTL_SECONDS')
    ttl  = timedelta(seconds=int(momento_ttl_seconds))

    config = {
      'configuration': Configurations.Laptop.v1(),
      'credential_provider': momento_auth_token,
      'default_ttl':  ttl
    }
    return CacheClient(**config)

def run():
    with open(file_path, 'rb') as file:
        byte_array = file.read()
        print(f'The value of the file is: {byte_array}')

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
            with open("./myfile2.json", "wb") as out_file:
                out_file.write(buffer)
        elif isinstance(file_response, CacheGet.Miss):
            print('cache miss')
        elif isinstance(file_response, CacheGet.Error):
            print(f'Error: {file_response.message()}')

if __name__ == '__main__':
    run()


```

Check our [Python cheat sheet](/develop/guides/cheat-sheets/momento-cache-python-cheat-sheet.md) for more on using our Python SDK.

   </TabItem>
</Tabs>
