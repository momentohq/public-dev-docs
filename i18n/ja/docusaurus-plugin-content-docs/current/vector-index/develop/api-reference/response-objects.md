---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Vector Indexes
description: Learn how to interact with the response object in the Momento API for Vector Indexes.
---

# Momento APIからのレスポンスオブジェクトをMomento Vector Indexesで表示します。

これらは、すべてのコマンドに対する基本的な応答です。いくつかのコマンドは、より多くのデータと機能を追加します。

## エラー

例外として戻り値が出力されます。

### コンストラクタ

- innerException： 例外 - エラーの原因となった例外

### メソッド

- message(): String - 人間が読めるエラーメッセージ
- innerException(): Exception - 本来の例外である
- errorCode(): MomentoErrorCode - InvalidArgumentやBadRequestなど、Momento独自のエラーカテゴリ。詳しくはこちら [標準と実践 - エラー処理](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- toString(): String - message() のエイリアス

## 成功

コマンドの実行成功
