---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Topics
description: Learn how to interact with the response object in the Momento API for Momento Topics.
---

# Momento トピックの Momento API からの応答オブジェクト

Momento レスポンスオブジェクトは親クラスから拡張され、`Success` や `Error` といった子型を持ち、パターンマッチによってアクセスできるように設計されている。(ある言語ではこの概念を「シールドクラス」と呼び、他の言語では「代数的データ型」と呼ぶ。ポリモーフィズムの一種である)。コードはレスポンスが `Success` か `Error` かをチェックし、それに応じて分岐する。この方法を使うと、型安全なレスポンスオブジェクトを得ることができ、それを使ってさらに情報を得ることができる。
---

## Error

Momento Leaderboards サービスの呼び出しで発生したエラーは、例外のスローではなく、呼び出しの戻り値の一部として開発者に表示されます。これは、実行時にアプリケーションがクラッシュしないようにし、コードを書いているときにエラーをより見やすくし、気になるエラーを確実に処理するために IDE がより役立つようにします。このことに関する私たちの考え方については、なぜ[例外はバグ](https://www.gomomento.com/blog/exceptions-are-bugs)なのかというブログ記事をご覧ください！

### Available methods

- `message()`： 文字列 - 人間が読めるエラーメッセージ。
- `innerException()`： Exception - 元の例外。
- `errorCode()`： MomentoErrorCode - InvalidArgument や BadRequest などの Momento 独自のエラーカテゴリ。スタンダードとプラクティス-  エラーハンドリング](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md) を参照。
- `toString()`： 文字列 - message() のエイリアス。

---

## Success

追加のメソッドを持たない、リクエストの成功を示す汎用レスポンスオブジェクト。

成功レスポンスオブジェクトのバリエーションは以下のとおりです：

### Subscription

Momento トピックの購読が成功したことを示します。言語によっては、コールバック関数または新しい購読項目をポーリングするために使用できるイテレータが提供されます。

使用可能なメソッドは以下のとおりです：

- `unsubscribe()`: void - トピックの購読を終了します。
