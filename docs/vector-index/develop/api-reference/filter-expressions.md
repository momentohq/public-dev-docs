---
sidebar_position: 11
sidebar_label: Filter expressions
title: Filter expression API reference for Momento Vector Index
description: Learn how to interact with the filter expressions in the Momento API for Vector Indexes.
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Filter expressions in Momento Vector Index

Filter expressions further refine the results of a search. While the vector similarity search ranks items by vector similarity to the query vector, the filter expression applies an additional `where clause` on the item metadata or ids. Only items satisfying the expression appear in the results.

They are used in the `filter` parameter of the [search](/vector-index/develop/api-reference/index.md#search) ([searchAndFetchVectors](/vector-index/develop/api-reference/index.md#search-and-fetch-vectors)) command.



Each language provides a convenience to create filter expressions. The following is the API reference for the filter expressions.

## Overview

Here we demo the entire API reference for filter expressions. Broadly we group the expressions into two categories:
- [Comparison expressions](#comparison-expressions): Directly compare a field's value and a specified value.
- [Logical expressions](#logical-expressions): Combine or modify filter expressions.

For this example we will use a hypothetical dataset of movies (think [IMDB](https://www.imdb.com)) with the following schema:

| Field | Type | Description |
|-------|------|-------------|
| movie_title | string | The title of the movie. |
| year | int | The year the movie was released. |
| gross_revenue_millions | float | The gross revenue of the movie in millions of dollars. |
| in_theaters | boolean | Whether the movie is currently in theaters. |
| actors | string[] | The list of actors in the movie. |
| directors | string[] | The list of directors of the movie. |

<SdkExampleTabs snippetId={'API_FilterExpressionOverview'} />

## Comparison expressions
Comparison expressions directly compare a field's value and a specified value. They are the basic building blocks of filter expressions.

:::tip

The numeric comparison expressions ([greaterThan](#greater-than), [greaterThanOrEquals](#greater-than-or-equals), [lessThan](#less-than), [lessThanOrEquals](#less-than-or-equals)) are only supported for numeric-valued fields. The expression will not be satisfied if the item does not have a value for the field or if the value is not a number.

:::

### Equals
Tests if a field's value exactly matches a given value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field to be compared. |
| value | string \| number \| boolean | The  value to test for exact match against the field's value. |


:::tip

To express `not equals`, chain the [not](#not) expression with the [equals](#equals) expression.

:::

### Greater than
Tests if a field's value is greater than a specified value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field to be compared. |
| value | number | The threshold value to test against. |

### Greater than or equals
Tests if a field's value is greater than or equals a specified value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field to be compared. |
| value | number | The threshold value to test against. |

### Less than
Tests if a field's value is less than a specified value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field to be compared. |
| value | number | The threshold value to test against. |

### Less than or equals
Tests if a field's value is less than or equals a specified value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field to be compared. |
| value | number | The threshold value to test against. |

### List contains
Tests if a field's list of values includes a specified value.

| Name | Type | Description |
|------|------|-------------|
| field | string | The name of the field containing a list of values. |
| value | string | The value to test for inclusion in the field's list. |

### Id in set
Tests if an item's id is in a specified set of ids.

| Name | Type | Description |
|------|------|-------------|
| ids | string[] | The set of ids to test for inclusion. |

## Logical expressions
Logical expressions combine or modify filter expressions. Instead of directly comparing against item data like [comparison expressions](#comparison-expressions), they operate on other filter expressions.

### And
Combines two filter expressions and returns items that satisfy both.

| Name | Type | Description |
|------|------|-------------|
| firstExpression | VectorFilterExpression | The first expression to evaluate. |
| secondExpression | VectorFilterExpression | The second expression to evaluate. |


### Or
Combines two filter expressions and returns items that satisfy either one or both.

| Name | Type | Description |
|------|------|-------------|
| firstExpression | VectorFilterExpression | The first expression to evaluate. |
| secondExpression | VectorFilterExpression | The second expression to evaluate. |

### Not
Negates the result of a filter expression.

| Name | Type | Description |
|------|------|-------------|
| expression | VectorFilterExpression | The expression to negate. |
