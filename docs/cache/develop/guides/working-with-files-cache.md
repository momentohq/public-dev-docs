---
sidebar_position: 4
sidebar_label: Working with files
title: Adding and retrieving files in a cache
description: Learn to add and retrieve files from Momento Cache with hands on code samples.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { SdkExampleCodeBlock } from "@site/src/components/SdkExampleCodeBlock";
import { SdkExampleCodeBlockImpl } from "@site/src/components/SdkExampleCodeBlockImpl";

# Add and retrieve a file with Momento Cache

An item in Momento Cache is a byte array, so a cache can easily store most any file you want to create, as long as it is under the [per item limit of 1MB](/cache/manage/limits).

Here is an example of reading a file from the filesystem, saving the file to an item in a cache, reading it from the cache, and then writing it to the filesystem.

<SdkExampleCodeBlock language={"javascript"} file={"examples/nodejs/cache/doc-example-files/working-with-files.ts"} />

