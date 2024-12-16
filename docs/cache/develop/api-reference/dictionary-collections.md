---
sidebar_position: 1
title: Dictionary API reference
sidebar_label: Dictionary
description: Learn how to interact with the API for dictionary collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Dictionary API reference for Momento Cache

This page details the Momento API methods for the [dictionary collection data type](../basics/datatypes.md#dictionaries).

:::info

Momento collection types use a [CollectionTTL](./collection-ttl.md) to specify their TTL behavior. This is an optional argument for all "write" operations.

:::

## Dictionary Methods

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryFetch

        Gets a dictionary item from a cache.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **dictionaryName** - *String*: The name of the dictionary item to be retrieved.

        #### Returns
        ----------------
        The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error.:
        - **Cache hit**:
            - `valueDictionaryBytesBytes()`: Map\<Bytes, Bytes\> 
            - `valueDictionaryStringString()`: Map\<String, String\>
            - `valueDictionaryStringBytes()`: Map\<String, Bytes\>
            - `valueDictionaryBytesString()`: Map\<Bytes, String\>
            - `toString()`: String - displays the field/value pairs, truncated.

        - **Cache miss**:

        - **Cache error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_DictionaryFetch'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryGetField

        Get one field from a dictionary item in the cache.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **dictionaryName** - *String*: Name of the dictionary item to be retrieved.
        - **field** - *String/Bytes*: Name of the field in the dictionary item to be retrieved.

        #### Returns
        ----------------
        The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error.:
        - **Cache hit**:
            These return the field and its value from the dictionary.
            - `fieldString()`: String
            - `fieldBytes()`: Bytes
            - `valueString()`: String
            - `valueBytes()`: Bytes

        - **Cache miss**:
          - `fieldString()`: String
          - `fieldBytes()`: Bytes 

        - **Cache error**:
            - See [response objects](./response-objects.md) for specific information.
       
    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_DictionaryGetField'} />

    </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryGetFields
        
        Get one or more fields from a dictionary in the cache.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be retrieved. 
        - **fields** - *String[]/Bytes[]*: Name of the fields in the dictionary item to be retrieved.

        #### Returns
        ----------------
        The response object for DictionaryFetch returns three possible options, a cache hit, miss, or an error.:
        - **Cache hit**:
            - `valueDictionaryBytesBytes()`: Map\<Bytes, Bytes>
            - `valueDictionaryStringString()`: Map\<String, String>
            - `valueDictionaryStringBytes()`: Map\<String, Bytes>
            - `valueDictionaryBytesString()`: Map\<Bytes, String>
            - `toString()`: String - displays truncated valueDictionaryStringString()

        - **Cache miss**:

        - **Cache error**:
            - See [response objects](./response-objects.md) for specific information. 

      </div>

      <div class='col col--8'>

          <SdkExampleTabs snippetId={'API_DictionaryGetFields'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryIncrement
        
        Adds to the value of a field, if and only if the existing value is a UTF-8 string representing a base 10 integer. If the field is missing from the dictionary, this method sets the field's value to the amount to increment by.

        > **Note:** The resulting incremented value **must** be between `-9223372036854775808` and `9223372036854775807` (a signed 64-bit integer). If the value exceeds this range, an error response will be returned.

        Examples:

          - When the field does not exist, `dictionaryIncrement(cache, dict, field, 10)` will set the field's value to 10.
          - When the field = 5, `dictionaryIncrement(cache, dict, field, 10)` will set the field's value to 15.
          - When the field = 'five', it will respond with a FailedPreconditionException error.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be retrieved. 
        - **field** - *String/Bytes*: Name of the field in the dictionary item to be retrieved.
        - **amount** - *Integer*: The quantity to add to the value. May be positive, negative, or zero. Defaults to 1.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: This will come back as a TTL construct.

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `value()`: integer - the new value after incrementing
            - `toString()`: String - displays the value()

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionaryIncrement'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryRemoveField

        Removes a field from a dictionary item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be retrieved. 
        - **field** - *String/Bytes*: Name of the field in the dictionary item to be removed.

        #### Returns
        ----------------
        One of the following:
        - **Success**:

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionaryRemoveField'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryRemoveFields

        Removes multiple fields from a dictionary item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be retrieved. 
        - **fields** - *String[]/Bytes[]*: Name of the fields in the dictionary item to be removed.

        #### Returns
        ----------------
        One of the following:
        - **Success**:

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionaryRemoveFields'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionarySetField

        Sets a field:value pair in an existing dictionary item. If the dictionary item does not exist, it is created with the new field:value pair.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be set. 
        - **field** - *String/Bytes*: Name of the field in the dictionary item to be set.
        - **value** - *String/Bytes*: Value to be set for the field.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.

        #### Returns
        ----------------
        One of the following:
        - **Success**:

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionarySetField'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionarySetFields

        Sets several field:value pairs in a dictionary item. If the dictionary item does not exist, it is created with the new fields.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be set. 
        - **fields** - *String[]/Bytes[]*: Field:value pair to be added to the dictionary item by the set operation.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the dictionary item in cache. This TTL takes precedence over the TTL used when initializing a cache client.

        #### Returns
        ----------------
        One of the following:
        - **Success**:

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionarySetFields'} />

      </div>

</div> 

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### DictionaryLength

        Get the length of an existing dictionary item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.
        - **dictionaryName** - *String*: Name of the dictionary item to be checked.. 

        #### Returns
        ----------------
        One of the following:
        - **Hit**:
            - `length()`: integer - the number of fields in the dictionary.
    
        - **Miss**
        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

      </div>

      <div class='col col--8'>

         <SdkExampleTabs snippetId={'API_DictionaryLength'} />

      </div>

</div> 

---
