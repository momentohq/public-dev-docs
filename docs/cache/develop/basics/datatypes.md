---
sidebar_position: 1
sidebar_label: Data Types
title: Supported data types
description: Learn the core data types in Momento Cache to match up with common types in modern programming languages and information about each.
---

# Supported data types in Momento Cache

Momento Cache provides a group of core data types to match up with common types in various modern programming languages. This page has a list of the core data structures and information about each of them.

## Core data types of Momento Cache

### Byte arrays

All data stored is represented as byte arrays. The Momento SDKs provide easy methods you can use to store your data as raw bytes or as portable UTF-8 strings. Those can be in the form of scalar data, such as strings, characters, numbers, and binary data, such as images and Protocol Buffers serialized arrays.

### Collection data types (CDTs)

Collection Data Types are a grouping of related data into a single item. They are stored as byte array values and each has their own set of API calls in Momento SDKs. For example, DictionaryFetch, ListFetch, and SetFetch.

<img src="/img/collection_data_types.png" alt="Collection data types drawing | Momento Cache" width="80%"/>

#### Lists

A list is a collection of ordered elements, sorted in the sequence each element was inserted.

```javascript
"Hoover’s Sour Cream Cookies" = [
  "1 cup butter (2 sticks), room temperature",
  "1 cup granulated sugar",
  "1 cup brown sugar, packed",
  "3 eggs, room temperature",
  "1 cup sour cream, room temperature",
  "1 tsp pure vanilla extract",
  "3 cups all-purpose flour",
  "1 tsp baking powder",
  "1 tsp baking soda",
  "1 tsp salt"
]
```

To learn the API methods, check the [API reference for list collection data types](../api-reference/list-collections.md).

#### Dictionaries

A dictionary is a collection of unordered elements where each element is a field:value pair.

An example of using a dictionary is when you need to store data together and retrieve field:value pairs by name.
```javascript
"truck546" = {
    "brand" : "Ford",
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```

To learn the API methods, check the [API reference for dictionary collection data types](../api-reference/dictionary-collections.md).

#### Sets
A set is an unordered collection of unique elements, each in string format. For example, no matter how many times you add 'sugar' to a set, there will only be one entry for 'sugar'.

```javascript
"myIngredients" = {
    "water",
    "sugar",
    "ground cinnamon",
    "all-purpose flour",
    "baking soda",
    "raisins"
}
```

To learn the API methods, check the [API reference for set collection data types](../api-reference/set-collections.md).

#### Sorted sets

A sorted set is a collection of unique elements with a value (string) and score (signed double 64-bit float) pair. The elements in the item are ordered by score value. For example,

```javascript
"players" = {
    "SorataABard" : 32.7,
    "Juliversal" : 30.45,
    "DragonNosy" : 26.8,
    "redbyrd" : 26.8,
    "SaltyAdjeley" : 23.25,
    "ZachAttack" : 17.3,
    "ElyahouBeets" : 5.0,
    "Smashley" : 3.2"
}
```

:::note

If elements have the same score, they are sorted [lexicographically](https://www.dictionary.com/browse/lexicographically).

:::

To learn the API methods, check the [API reference for sorted set collection data types](../api-reference/sorted-set-collections.md).

## FAQ
<details>
  <summary>If I perform an API call to get a subset of data from a dictionary item, will the size of the entire item count toward the per GB transfer costs?</summary>

No, it will not. For example, if you perform the API call DictionaryGetField to get one 5-kilobyte field:value pair from a dictionary where the entire dictionary item is 50 kilobytes, only 5 kilobytes count towards your per GB transfer costs.
</details>

<details>
  <summary>How do I store a JSON document in Momento Cache?</summary>

Use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache. You could also store each field value in your JSON document in a dictionary.
</details>

<details>
  <summary>Does Momento Cache store nested data in collection data types?</summary>

Not directly. Your best option is to store this data as a JSON object and then use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Cache.
</details>

<details>
  <summary>How do I format elements when using the increment APIs?</summary>
  
Elements used with increment API calls must be stored as a UTF-8 string representing a base 10 integer. If the elements are not in that format, the API calls will throw a formatting error.
</details>
