---
sidebar_position: 11
sidebar_label: Response objects
title: Momento Topicsのレスポンスオブジェクト API リファレンス
description: Momento API におけるレスポンスオブジェクトとのやり取り方法を学びましょう。
---

# Momento APIからのレスポンスオブジェクト

Momento レスポンスオブジェクトは親クラスから拡張され、`Success` や `Error` といった子型を持ち、パターンマッチによってアクセスできるように設計されている。(ある言語ではこの概念を「シールドクラス」と呼び、別の言語では「代数的データ型」と呼ぶ。ポリモーフィズムの一種である)。コードはレスポンスが `Success` か `Error` かをチェックし、それに応じて分岐する。この方法を使うと、型安全なレスポンスオブジェクトを得ることができ、それを使ってさらに情報を得ることができる。

---

## エラー

Momento Leaderboards サービスの呼び出しで発生したエラーは、例外のスローではなく、呼び出しの戻り値の一部として開発者に表示されます。これは、実行時にアプリケーションがクラッシュしないようにし、コードを書いているときにエラーをより見やすくし、気になるエラーを確実に処理するために IDE がより役立つようにします。この点に関する私たちの考え方については、ブログ記事「なぜ[例外はバグ]なのか」(https://www.gomomento.com/blog/exceptions-are-bugs)をご覧ください。また、ご意見があればお寄せください！

### 利用可能なメソッド

- message(): String - 読みやすいエラーメッセージ
- innerException(): Exception - 元の例外
- errorCode(): MomentoErrorCode - Momento 独自のエラーカテゴリ（例：InvalidArgument や BadRequest ）を指します。詳細は [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)を参照してください。
- toString(): String - message() のエイリアスです。

---

## Success

追加のメソッドを持たない、リクエストの成功を示す汎用レスポンスオブジェクト。

成功のレスポンス・オブジェクトのバリエーションには次のようなものがあります：

### Subscription

Momento トピックの購読が成功したことを示します。言語によっては、コールバック関数や、新しい購読アイテムのポーリングに使用できるイテレータが提供される場合があります。

利用可能なメソッドは以下の通り：

- `unsubscribe()`: void - トピックのサブスクリプションを終了します。
  
### ListWebhooks

Webhooks リクエストのリストが成功したことを示します。利用可能なメソッドは以下のとおりです： 

- `getWebhooks()`: リスト - 既存の Webhook のリストを返します。各 [`Webhook` オブジェクト](./webhooks#webhook-object) は `destination`、`id`、`topicName` フィールドを含みます。

### PutWebhook

put webhook リクエストが成功したことを示します。利用可能なメソッドは以下のとおりです： 

- secretString()`： 文字列 - Webhookの署名の秘密を返す。

### GetWebhookSecret

get webhook secret リクエストが成功したことを示します。利用可能なメソッドは以下のとおりです： 

- `secret()`: 文字列 - Webhookの署名シークレットを返します。
- `webhookName()`: 文字列 - Webhookの名前を返します。
- `cacheName()`: 文字列 - webhook に関連付けられたキャッシュの名前を返します。

### RotateWebhookSecret

rotate webhook secret リクエストが成功したことを示します。利用可能なメソッドは以下のとおりです： 

- `secret()`: 文字列 - webhookの署名シークレットを返します。
- `webhookName()`: 文字列 - webhookの名前を返します。
- `cacheName()`: 文字列 - webhookに関連付けられたキャッシュの名前を返します。
