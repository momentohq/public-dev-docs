---
sidebar_position: 3
sidebar_label: Data Types
sidebar_class_name: sidebar-item-data-types
title: Data types
description: Learn the core data types in Momento Serverless Cache to match up with common types in various modern programming languages and information about each of them.
---

# Data types in Momento Serverless Cache
Momento Serverless Cache provides a group of core data types to match up with common types in various modern programming languages. This page has a list of the core data structures and information about each of them.

## Core data types of MSC

### Byte arrays
All data stored in Momento Serverless Cache is represented as byte arrays. The Momento SDKs provide easy methods you can use to store your data as raw bytes or as portable UTF-8 strings. Those can be in the form of scalar data, such as strings, characters, numbers, and binary data, such as images and Protocol Buffers serialized arrays.

### Collection data types (CDTs)
Collection data types are a grouping of related data into a single item. They are stored as byte array values and each has their own set of API calls in Momento SDKs. For example, DictionaryFetch, ListFetch, and SetFetch.

#### List collections
A list is a collection of ordered values sorted in the sequence the each element was inserted.

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
#### Dictionary collections
Dictionary data types are used to store unordered key:value pairs.

An example of using a dictionary is when you need to store data together and retrieve key:value pairs by name.
```javascript
"truck546" = {
    "brand" : "Ford", 
    "model": "F-350",
    "year" : "2020",
    "engine" : "diesel"
}
```
#### Set collections
The set collection data type is an unordered collection of unique strings. For example, no matter how many times you add 'sugar' to a set, there will only be one entry for 'sugar'.
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
## FAQs
<details>
  <summary>If I perform an API call to get a subset of data from a Dictionary item, will the size of the entire item count toward the per GB transfer costs?</summary>
No, it will not. For example, if you perform the API call DictionaryGetField to get one 5-kilobyte field in a dictionary where the entire dictionary item is 50 kilobytes, only 5 kilobytes count towards my per GB transfer costs.
</details>

<details>
  <summary>How do I store a JSON document in Momento Serverless Cache?</summary>
Use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Serverless Cache.
</details>

<details>
  <summary>Does Momento Serverless Cache store nested data in collection data types?</summary>
Not directly. Your best option is to store this data as a JSON object and then use your favorite JSON library to serialize the JSON document into a byte array and insert that byte array into Momento Serverless Cache.
</details>

<details>
  <summary>How do I format values when using the increment APIs?</summary>
Values used with increment API calls must be stored as a UTF-8 string representing a base 10 integer. If they are not in that format, those API calls will throw a formatting error.
</details>