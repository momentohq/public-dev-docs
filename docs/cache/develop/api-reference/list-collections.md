---
sidebar_position: 2
title: List API reference
sidebar_label: Lists
description: Learn how to interact with the API for list collection data types in Momento Cache.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# List API reference for Momento Cache

This page details the Momento API methods for the [list collection data types](../basics/datatypes.md#lists).

:::info

Momento collection types use a [CollectionTTL](./collection-ttl.md) to specify their TTL behavior. This is an optional argument for all "write" operations.

:::

## List Methods

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListFetch

        Gets a list item from a cache, with optional slices.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: The name of the list item to be retrieved.

        #### Optional Parameters
        ----------------
        - **startIndex** - *Number*: The starting inclusive element of the list to fetch. Default is 0. 
        - **endIndex** - *Number*: The ending exclusive element of the list to fetch. Default is end of list.

        #### Returns
        ----------------
        The response object for ListFetch returns three possible options, a cache hit, miss, or an error:
        - **Hit**:
            - `valueListBytes()`: Bytes[] 
            - `valueListString()`: String[]
            - `toString()`: String - Display a truncated valueListString(). See [truncation](#truncate-to-size).

        - **Miss**:

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListFetch'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListConcatenateBack

        Appends the supplied list to the end of an existing list item.

        Example:
        
        If you have [1, 2, 3] and listConcatenateBack [4, 5, 6] you will have [1, 2, 3, 4, 5, 6].

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **values** - *String[] | Bytes[]*: Values to be added as elements to the list item.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object.
        - **truncateFrontToSize** - *Number*: See [truncate to size](#truncate-to-size).

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `listLength()`: Number - the new length of the list
            - `toString()`: String - add the listLength

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListConcatenateBack'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListConcatenateFront

        Appends the supplied list to the front of an existing list item.

        Example:
        
        If you have [1, 2, 3] and listConcatenateFront [4, 5, 6] you will have [4, 5, 6, 1, 2, 3].

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **values** - *String[] | Bytes[]*: Values to be added as elements to the list item.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object.
        - **truncateBackToSize** - *Number*: See [truncate to size](#truncate-to-size).

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `listLength()`: Number - the new length of the list
            - `toString()`: String - add the listLength

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListConcatenateFront'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListLength

        Get the length of an existing list item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be checked.

        #### Returns
        ----------------
        One of the following:
        - **Hit**:
            - `length()`: Number

        - **Miss**

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListLength'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListPopBack

        Remove and return the last element from a list item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be retrieved.

        #### Returns
        ----------------
        One of the following:
        - **Hit**:
            - `valueString()`: String
            - `valueBytes()`: Bytes
            - `toString()`: truncated valueString()

        - **Miss**

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListPopBack'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListPopFront

        Remove and return the first element from a list item.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be retrieved.

        #### Returns
        ----------------
        One of the following:
        - **Hit**:
            - `valueString()`: String
            - `valueBytes()`: Bytes
            - `toString()`: truncated valueString()

        - **Miss**

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListPopFront'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListPushBack

        Push a value to the end of a list item. This is exactly like passing just one value to [ListConcatenateBack](#listconcatenateback).

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **value** - *String | Bytes*: Value to be added.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.
        - **truncateFrontToSize** - *Number*: See [truncate to size](#truncate-to-size).

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `listLength()`: Number - the new length of the list item
            - `toString()`: String - add the listLength

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListPushBack'} />

    </div>

</div>
 
---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListPushFront

        Push a value to the beginning of a list item. Just like [ListPushBack](#listpushback), but to the front.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **value** - *String | Bytes*: Value to be added.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.
        - **truncateBackToSize** - *Number*: See [truncate to size](#truncate-to-size).

        #### Returns
        ----------------
        One of the following:
        - **Success**:
            - `listLength()`: Number - the new length of the list item
            - `toString()`: String - add the listLength

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListPushFront'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListRemoveValue

        Remove all elements in a list item equal to a particular value.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **value** - *String | Bytes*: Value to be added to the list item by the operation.

        #### Returns
        ----------------
        One of the following:
        - **Success**: even if the value does not exist.

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

        <SdkExampleTabs snippetId={'API_ListRemoveValue'} />

    </div>

</div>

---

<div class='row'>

    <div class='col col--4' style={{paddingRight: '20px'}}>

        ### ListRetain

        Retains only slice of the list where the start is inclusive and the end is exclusive.  The items outside of this range will be dropped from the list.

        Example:
        For the specified list, start at index 4 (the startIndex) and keep the next five elements, end at index 10 (the endIndex). Discard all other elements in the list. In this example, elements at position 0-3 and 9 or higher are dropped.

        #### Parameters
        ----------------
        - **cacheName** - *String*: Name of the cache.  
        - **listName** - *String*: Name of the list item to be set.
        - **startIndex** - *Number*: The starting inclusive element of the list to retain. Default is 0.
        - **endIndex** - *Number*: The ending exclusive element of the list to retain. Default is end of list.
        - **ttl** - *[CollectionTTL object](./collection-ttl.md)*: TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.

        #### Returns
        ----------------
        One of the following:
        - **Success**: even if the value does not exist.

        - **Error**:
            - See [response objects](./response-objects.md) for specific information.

    </div>

    <div class='col col--8'>

       <SdkExampleTabs snippetId={'API_ListRetain'} />

    </div>

</div>

---

## Truncate to size

[ListConcatenate](#listconcatenateback) and [ListPush](#listpushback) type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 5` the list will be truncated to `[2, 3, 4, 5, 6]` and the response ListLength will be 5.

* Example: If the list is `[1, 2, 3]` and you ListConcatenateBack `[4, 5, 6]` with `truncateFrontToSize: 10` the list will not be truncated. It will be `[1, 2, 3, 4, 5, 6]`
