---
sidebar_position: 11
sidebar_label: レスポンスオブジェクト
title: Response object API リファレンス
pagination_next: null
description: Momento API におけるレスポンスオブジェクトとのやり取り方法を学びましょう。
---

# Momento API からのレスポンスオブジェクト

これらはすべてのコマンドの基本的なレスポンスです。一部のコマンドでは、追加のデータや機能が提供される場合もあります。

コマンドは、*一般的*に2つのカテゴリに分類されます。以下のようなレスポンスを返すものがあります。
1. **Success or Error** - 例えば、Set 操作はその一例です。キャッシュにアイテムが正常に書き込まれた場合とエラーが発生した場合の2つのレスポンスがあります。
2. **Hit, Miss, or Error** - 例えば、Get 操作はその一例です。要求されたアイテムがキャッシュに存在する場合、キャッシュヒットとなります。キャッシュに存在しない場合はキャッシュミスとなります。エラーが発生した場合はエラーとなります。

## Error

例外の代わりに返されます。

### Constructor

- innerException: Exception - エラーの原因となった例外

### Methods

- message(): String - 読みやすいエラーメッセージ
- innerException(): Exception - 元の例外
- errorCode(): MomentoErrorCode - Momento 独自のエラーカテゴリ（例：InvalidArgument や BadRequest ）を指します。詳細は [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)を参照してください。
- toString(): String - message() のエイリアスです。

## Success

コマンドは成功しました。

## Hit

キーまたはフィールドはキャッシュに存在します。通常、値を返すように拡張されます。

## Miss

キーまたはフィールドはキャッシュに存在しません。

## Set

TTLコマンドに対して、更新が正常に適用されました。

## NotSet

TTL コマンドに対して、更新は適用されず、既存の TTL に変更はありませんでした。

## Stored

setIf* コマンドにおいて、キーが存在せず、値が設定されました。

## NotStored

setIf* コマンドにおいて、キーが存在し、値は設定されませんでした。
