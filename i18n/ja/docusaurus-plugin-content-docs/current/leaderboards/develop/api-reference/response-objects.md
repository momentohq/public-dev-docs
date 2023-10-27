---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Leaderboards
description: Learn how to interact with the response object in the Momento API for Leaderboards.
---

# Momento LeaderboardsのMomento APIからのレスポンスオブジェクト

これらは、すべてのコマンドに対する基本的な応答です。いくつかのコマンドは、より多くのデータと機能を追加します。

## Error

例外に代えて返却される

### Constructor

- innerException： 例外 - エラーの原因となった例外

### Methods

- message()： 文字列 - 人間が読めるエラーメッセージ。
- innerException()： 例外 - 元の例外。
- errorCode()： MomentoErrorCode - InvalidArgument や BadRequest などの Momento 独自のエラー。[標準と実践 エラー処理](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md) を参照ください。
- toString()： 文字列 - message() のエイリアス。

## Success

コマンドは成功しました。