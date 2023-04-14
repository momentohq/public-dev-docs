---
sidebar_position: 4
sidebar_label: Working with files
title: Adding and retrieving files in a cache
description: Learn to add and retreive files with a Momento cache
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add and retrieve a file to Momento Cache
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

Check our [Node.js cheat sheet](/develop/guides/cheat-sheets/momento-cache-nodejs-cheat-sheet.md) for more on using our Node.js SDK
   </TabItem>
   <TabItem value="py" label="Python">
   Coming soon.
   </TabItem>
</Tabs>
