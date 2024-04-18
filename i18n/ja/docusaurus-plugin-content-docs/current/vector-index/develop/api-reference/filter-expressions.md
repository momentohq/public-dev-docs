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

# Momento Vector Index のフィルター条件式

フィルタ式は検索結果をさらに絞り込みます。ベクトル類似度検索がクエリベクトルとのベクトル類似度でアイテムをランク付けするのに対して、フィルター式はアイテムのメタデータまたは ID に対して追加の `where 節` を適用します。式を満たすアイテムだけが検索結果に表示されます。

これらは、[search](/vector-index/develop/api-reference/index.md#search) ([searchAndFetchVectors](/vector-index/develop/api-reference/index.md#search-and-fetch-vectors)) コマンドの `filter` パラメータで使用されます。

各言語はフィルター式を作成するための便利な機能を提供しています。以下にフィルター式のAPIリファレンスを紹介します。

## Overview

ここでは、フィルター式のAPIリファレンス全体をデモする。大まかに2つのカテゴリーに分類します：
- [比較式](#comparison-expressions)： フィールドの値と指定された値を直接比較します
- [論理式](#logical-expressions)： フィルター式を組み合わせたり修正したりします

この例では、次のスキーマを持つ映画の仮想データセット（[IMDB](https://www.imdb.com)を考える）を使います：

| Field | Type | Description |
|-------|------|-------------|
| movie_title | string | 映画のタイトル |
| year | int | 映画が公開された年|
| gross_revenue_millions | float | 映画の興行収入（単位：百万ドル） |
| in_theaters | boolean | 現在公開中の映画かどうか |
| actors | string[] | 映画の出演者リスト |
| directors | string[] | 映画の監督リスト |

<SdkExampleTabs snippetId={'API_FilterExpressionOverview'} />

## Comparison expressions
比較式は、フィールドの値と指定された値を直接比較します。フィルタ式の基本的な構成要素です。

:::tip

数値比較式（[greaterThan](#greater-than)、[greaterThanOrEquals](#greater-than-or-equals)、[lessThan](#less-than)、[lessThanOrEquals](#less-than-or-equals)）は、数値フィールドでのみサポートされます。アイテムにフィールドの値がないか、値が数値でない場合、式は満たされません。

:::

### Equals
フィールドの値が与えられた値と完全に一致するかどうかをテストする。
| Name | Type | Description |
|------|------|-------------|
| field | string | 比較するフィールドの名前 |
| value | string \| number \| boolean | フィールドの値との完全一致をテストする値 |


:::tip
not equals`を表現するには、[not](#not)式と[equals](#equals)式を連結します。
:::

### Greater than
フィールドの値が指定された値より大きいかどうかをテストする

| Name | Type | Description |
|------|------|-------------|
| field | string | T比較するフィールドの名前 |
| value | number | テストする閾値 |

### Greater than or equals
フィールドの値が指定された値より大きいか等しいかをテストする

| Name | Type | Description |
|------|------|-------------|
| field | string | 比較するフィールドの名前 |
| value | number | テストする閾値 |

### Less than
フィールドの値が指定した値より小さいかどうかをテストする
| Name | Type | Description |
|------|------|-------------|
| field | string | 比較するフィールドの名前 |
| value | number | テストする閾値|

### Less than or equals
フィールドの値が指定された値以下か等しいかをテストする。

| Name | Type | Description |
|------|------|-------------|
| field | string | 比較するフィールドの名前|
| value | number | テストする閾値 |

### List contains
フィールドの値のリストに指定された値が含まれているかどうかをテストする
| Name | Type | Description |
|------|------|-------------|
| field | string | 値のリストを含むフィールドの名前 |
| value | string | フィールドのリストに含まれるかどうかをテストする値 |

### Id in set
アイテムのidが指定されたidの集合の中にあるかどうかをテストする。
| Name | Type | Description |
|------|------|-------------|
| ids | string[] | インクルードをテストするIDのセット |

## Logical expressions
論理式はフィルター式を組み合わせたり変更したりします。[比較式](#comparison-expressions)のようにアイテムデータと直接比較するのではなく、他のフィルター式を操作します。

### And
2つのフィルタ式を組み合わせて、両方を満たす項目を返します

| Name | Type | Description |
|------|------|-------------|
| firstExpression | VectorFilterExpression |最初に評価する式 |
| secondExpression | VectorFilterExpression | 評価する2番目の式 |
### Or
2つのフィルター式を組み合わせ、どちらか一方または両方を満たす項目を返します。

| Name | Type | Description |
|------|------|-------------|
| firstExpression | VectorFilterExpression | 最初に評価する式 |
| secondExpression | VectorFilterExpression | 評価する2番目の式 |
### Not
フィルター式の結果を否定する。

| Name | Type | Description |
|------|------|-------------|
| expression | VectorFilterExpression | 否定する式 |