---
sidebar_position: 20
title: Momento tokens for short-lived, limited scope permissions
sidebar_label: Tokens
description: Momentoトークンとは何か、トークンの作成方法、トークンの使用方法について説明します。
---

import { SdkExampleTabs } from "@site/src/components/SdkExampleTabs";
// This import is necessary even though it looks like it's un-used; The inject-example-code-snippet
// plugin will transform instances of SdkExampleTabs to SdkExampleTabsImpl
import { SdkExampleTabsImpl } from "@site/src/components/SdkExampleTabsImpl";

# 有効期間の短いアクセス許可用の Momento トークンz

![a technical illustration of Momento authentication and access control.](@site/static/img/tokens-page.jpg)

トークンは、ユーザーのセッションなどの一時的な状況で使用されることを目的とした、有効期間が短く、範囲が限定された値です。 ユーザーログインなどのソフトウェアライフサイクルイベントでは、多くの場合、そのセッションの間のみ有効なトークンが発行されます。

Momento トークンは、*データプレーン* API 操作へのアクセスのみを許可します。 ユーザーは、キャッシュの作成、削除、フラッシュなどの *コントロールプレーン* 操作を実行できません。

完全な特権トークンを持つユーザーは、次のアクションを実行できます。

* 任意のキャッシュ内のキャッシュ項目を追加/編集/削除
* 任意のキャッシュ内の任意のトピックをパブリッシュおよびサブスクライブ
* 任意のキャッシュのインクリメント API を介してキャッシュ値をインクリメント

システム要件に基づいてトークンのアクセスを制限するかどうかは、ユーザーの責任です。

## トークンの作成

[API キー](./api-keys.md) とは異なり、トークンを作成する唯一の方法はコードを使用することです。 Momento コンソールからは作成できません。

以下に、さまざまな権限セットを持つトークンを作成する例をいくつか示します。

<SdkExampleTabs snippetId={'API_GenerateDisposableToken'} />

トークン作成の詳細については、[APIリファレンスページ](./../api-reference/auth.md)を参照してください。

## 有効期限

Momento トークンには有効期限が必要です。 **トークンの最大有効期限は 1 時間です**。 トークンの有効期限が経過すると、新しいトークンを作成する必要があります。

期限切れのトークンを使用して呼び出しを行おうとすると、提供された資格情報がサービスに接続できなかったことを示す「AUTHENTICATION_ERROR」応答が返されます。

:::tip

トークンは更新できません。 したがって、期限が切れると永久に失われます。 セッションが継続する場合は、新しいセッションを作成して発行する必要があります。

:::

## ユースケース

これらのトークンは、次の使用例に最適です。

* フロントエンド開発に Momento を使用
* IoT デバイスとの通信
* 特定のリソースへの一時的なアクセスの発行
* ログイン時にユーザーに資格情報を提供する

## データ制限

トークンの一般的な使用例は、アクセスをリソースの小さなサブセットのみに制限することです。 トークンに *読み取り専用* アクセスを提供するなど、機能を制限できるだけでなく、個々のキャッシュ アイテムやトピックにスコープを設定することもできます。

データ制限で何ができるかを完全に理解するには、[権限ページ](./permissions.md) を確認してください。