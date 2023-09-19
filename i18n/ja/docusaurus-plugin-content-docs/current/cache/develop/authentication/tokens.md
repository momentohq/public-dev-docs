---
sidebar_position: 20
title: Tokens
sidebar_label: Tokens
description: Momentoトークンとは何か、トークンの作成方法、トークンの使用方法について説明します。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# Momento tokens

トークンは、ユーザーセッションのような一時的な状況で使用されることを目的とした、短命でスコープが限定された値です。
ユーザーログインのようなソフトウェアライフサイクルイベントでは、セッションの標準的な期間だけ有効なトークンが発行されることがよくあります。

Momento トークンは、*データプレーン*にのみアクセスできます。つまり、有効なトークンを持つユーザは、キャッシュの作成、削除、フラッシュなどを行うことができません。また、新しいトークンを作成することもできません。

完全に特権化されたトークンを持つユーザーは、以下のアクションを実行できます：

* あらゆるキャッシュのキャッシュアイテムを追加/編集/削除する。
* 任意のキャッシュ内の任意のトピックをパブリッシュ、サブスクライブする。
* どのキャッシュでも、インクリメント API を使ってキャッシュの値を増やすことができます。

システム要件に基づいてトークンのアクセスを制限するのはあなた次第です。

## トークンを作成する

[APIキー](./api-keys.md)を作成する手順とは異なり、トークンを作成する唯一の方法はコードから作成することです。Momentoコンソールから作成することはできません。

以下は、さまざまな権限でトークンを作成する例です：

<SdkExampleTabs snippetId={'API_GenerateAuthToken'} />

トークン作成の詳細については、[APIリファレンスページ](./index.mdx)を参照してください。

## 有効期限

Momento トークンには有効期限が必要です。**トークンの最大有効期限は1時間**です。トークンの有効期限が切れると、新しいトークンを作成する必要があります。

有効期限が切れたトークンでmomentoを呼び出しても、提供された認証情報がサービスに接続できなかったことを示す `AUTHENTICATION_ERROR` 応答が返されます。

:::tip

トークンはリフレッシュできません。そのため、トークンの有効期限が切れると、永久に使えなくなります。セッションを継続する場合は、新しいものを作成して発行する責任があります。

:::

## ユースケース

これらのトークンは、以下のユースケースに最適です：

* フロントエンド開発にMomentoを使用する
* IoT デバイスとの通信
* 特定のリソースへの一時的なアクセス権の発行
* ログイン時にユーザーに認証情報を提供する

## データ制限

トークンの一般的な使用例は、リソースの小さなサブセットのみにアクセスを制限することです。
トークンを*読み取り専用*アクセスで提供するように機能を制限できるだけでなく、個々のキャッシュアイテムやトピックにスコープすることもできます。

データ制限で何ができるかを完全に理解するには、[permissions page](./permissions.md)をチェックしてください。
