---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Leaderboards
description: Learn how to interact with the response objects in the Momento API for Leaderboards.
---

# Momento LeaderboardsのMomento APIからのレスポンスオブジェクト

Momento レスポンスオブジェクトは親クラスから拡張され、`Success` や `Error` といった子の型を持ち、パターンマッチによってアクセスできるように設計されています。(ある言語ではこの概念を「シールドクラス」と呼び、別の言語では「代数的データ型」と呼びます。これは、ポリモーフィズムの一種です)。コードはレスポンスが `Success` か `Error` かをチェックし、それに応じて分岐します。この方法を使うと、型安全なレスポンスオブジェクトを得ることができ、それを使ってさらに情報を得ることができます。

---

## Error

Momento Leaderboards サービスの呼び出しで発生したエラーは、例外のスローではなく、呼び出しの戻り値の一部として開発者に表示されます。これは、実行時にアプリケーションがクラッシュしないようにし、コードを書いているときにエラーをより見やすくし、気になるエラーを確実に処理するために IDE がより役立つようにします。この点に関する私たちの考え方については、ブログ記事「なぜ[例外はバグ]なのか」(https://www.gomomento.com/blog/exceptions-are-bugs)をご覧ください。また、ご意見があればお寄せください！

### 利用可能な方法

- `message()`: 文字列 - 人間が読めるメッセージ
- `innerException()`: 例外 - 元の例外の内容。
- `errorCode()`: MomentoErrorCode -  InvalidArgument や BadRequest などの Momento 独自のエラー。[Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)を参照ください。
- `toString()`: 文字列 - message() のエイリアス。

---

## Success

追加のメソッドを持たない、リクエストの成功を示す汎用レスポンスオブジェクト。

成功の・レスポンス・オブジェクトのバリエーションには次のようなものがあります：

### LeaderboardFetch
フェッチ要求に成功したことを示します。利用可能なメソッドは以下の通り：

`values()`: リスト - フィールド `id`、`score`、`rank` を含むレコードのリストを返します。

### LeaderboardLength

長さのリクエストに成功したことを示す。

- `length()`: Integer - returns the number of elements in the specified leaderboard
