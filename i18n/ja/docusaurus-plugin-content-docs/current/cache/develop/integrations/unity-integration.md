---
sidebar_position: 7
sidebar_label: Unity
title: Integrating Momento with your Unity app
description: Learn to deploy a chat app using Momento .NET SDK to Unity.
---

[Unity](https://unity.com/)は、今日、市場で最も人気のあるゲームエンジンの1つであるリアルタイム開発プラットフォームです。Unityゲームエンジンは、モバイル、デスクトップ、没入型プラットフォーム（拡張現実や仮想現実など）を含むさまざまなプラットフォームで、2Dおよび3Dのインタラクティブアプリを作成するために何千人もの開発者によって使用されています。

このチュートリアルでは、[Momento .NET SDK](https://github.com/momentohq/client-sdk-dotnet)を使用して、[シンプルなUnityチャットアプリケーション](https://github.com/momentohq/momento-unity-demo)を作成します。具体的には、[Momento Topics](https://docs.momentohq.com/topics)を使用して、チャットメッセージのパブリッシュとサブスクライブを行います。

Momento Topicsは、サーバーレスでリアルタイムコミュニケーションを実現するアプローチで、クライアントがトピックと呼ばれる専用チャンネルをサブスクライブしてパブリッシュすることができます。そのため、Unityベースのリアルタイムチャットアプリケーションに最適です。さらに、サーバーレスアプローチであるため、独自のサーバーを作成したり設定したりする必要がありません。詳細は[Momento Topics Documentation page](https://docs.momentohq.com/topics)を参照してください。

## 前提条件

### Unity
[Unity 2022 LTS release](https://unity.com/releases/lts)をダウンロードしてください。このチュートリアルを書くにあたり、特にUnity 2022.3.9f1を使用しましたが、どのUnity 2022 LTSリリースでも動作するはずです。

### Momento
Unityのダウンロードとインストールを待つ間、[Momentoコンソール](https://console.gomomento.com)を使ってMomento側の設定を行うことができます。

1. メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクすることで、コンソールでアカウントを作成できます。
2. コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：
[キャッシュ作成ボタン](/img/console-create-cache.png)
3. `Unity-Topics-Cache`というキャッシュを作成します。キャッシュはクラウドプロバイダー、AWSまたはGCPのいずれかを選択し、任意のリージョンに作成できます。
4. `Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`Unity-Topics-Cache`キャッシュが表示されます。キャッシュを作成した地域もキャッシュのリストに表示されます。次のステップで Momento API Keyを生成するときに、同じ地域を選択する必要があります。
[チャットキャッシュ](/img/unity/Unity-Topics-Cache.png)
5. [API Key](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダーとリージョンを選択し、`Super User API Key` トークンタイプを選択し、`Generate API Key` ボタンをクリックします。
![Generate token](/img/console-generate-api-key.png)
6. `API Key`をコピーして安全な場所に保存してください。後でUnityチャットアプリケーションを設定するために使用する必要があります。
![Generated token](/img/console-api-key-result.png)

## Unityプロジェクトのセットアップ

### プロジェクトの作成
[前提条件](#prerequisites)をクリアしたら、Unityプロジェクトをセットアップする必要があります。そのためには、私たちの[example demo repository](https://github.com/momentohq/momento-unity-demo)をクローンしてそこから始めるか、ゼロから自分で作成します。Unityに慣れていない場合や、後のステップで時間を節約したい場合は、exampleリポジトリをクローンすることをお勧めします。

サンプルのリポジトリにあるUnityプロジェクトを使用するには、以下の手順を実行します：
1. https://github.com/momentohq/momento-unity-demo をクローンします。
2. Unity Hub を開きます。
3. 既存のUnityプロジェクトを "Open"をクリックして開きます：
[新しいUnityプロジェクト](/img/unity/hub-new-project.png)
4. クローンしたフォルダを選択します。
5. 5. Unity 2022.3.9f1以外のバージョンを使用している場合、Unityにプロジェクトのエディタバージョンを適切に変更させる必要があるかもしれません。
6. 6.Unityプロジェクトがロードされたら、`Scenes/MomentTopicsDemo.unity`シーンファイルを開きます。

このチュートリアルの残りは、サンプルリポジトリを利用します。

### UnityにMomento .NET SDKを追加する
プロジェクトを開けたら
1. 最新の[MomentoSdkUnityリリース.zipファイル](https://github.com/momentohq/client-sdk-dotnet/releases)をダウンロードします。例えば、[v1.23.0 リリース](https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.23.0) の場合、[MomentoSdkUnity-1.23.0.zip](https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.23.0/MomentoSdkUnity-1.23.0.zip) をダウンロードします。この.zipファイルには、UnityのHTTP/2互換性の制限のためにgRPC-Webを利用するMomento .NET SDKの特別なバージョンが含まれています。必要な DLL の依存関係も zip ファイルに含まれています。
4. フォルダ `Assets/MomentoSdkUnity` 内に解凍します。

## MomentoトピックでUnityチャットアプリケーションを構築する
このステップまでくれば、[Momento .NET SDK](https://docs.momentohq.com/cache/develop/sdks/dotnet)を介してMomentoトピックに接続するためのユーザーインターフェイスの構築とC#スクリプトの作成を開始する準備が整ったことになります。

このチュートリアルでは、クローンされたリポジトリにある既存のサンプルコードを利用し、以下の2つのセクションでUIとC#コードがどのようにセットアップされているかの概要を説明します。

### ユーザーインターフェースの理解
私たちのサンプルプロジェクトでは、ユーザーインターフェイスはすでに2つの別々の[Unity UI Canvas](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html)要素にビルドアウトされています。1つはユーザーに名前を選択させるためのもので、もう1つは実際のテキストチャットのためのものです。

以下に示すように、NameCanvasには[TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/)入力フィールドと「Start」ボタンが含まれています。

![NameCanvas](/img/unity/NameCanvas.png)

ユーザーが名前を入力した後、Enterキーを押すか、"Start "ボタンをクリックすると、チャットアプリケーションが起動します。そうすると、C# スクリプトは NameCanvas を非表示にし、MessagingCanvas を表示します。

MessagingCanvas には [Scroll View](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIInteractionComponents.html#scroll-rect-scroll-view) があり、チャットメッセージングウィンドウをスクロールできるようにします。適切な [UI 要素の位置決め](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIBasicLayout.html) により、チャットメッセージエリアが上方向に成長し、最新のメッセージが常に下に表示されるようにすることができます。

![MessagingCanvas](/img/unity/MessagingCanvas.png)

MessagingCanvasには絵文字ボタンもあり、利用可能な絵文字を表示したり、チャットに絵文字を追加することができます：

[デモビデオ](/img/unity/emojis.png)

絵文字の挿入を処理するには、ヘルパーC#スクリプト `EmojiHelper.cs` を使用する。

### MomentoトピックをサブスクライブするC#スクリプトを理解する
このサンプルコードでは、[Momento .NET SDK Topic Example](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample) に基づいている `Assets/TopicsTest.cs` でマジックが起こります。

最初に行う必要があるのは、[Momento Prerequisite](#momento) ステップで作成したAPI Keyを C# スクリプトに知らせることです。[Momento .NET SDK Topic Example](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample)に従って、環境変数からAPI keyを取得するか、コードにハードコーディングします（コードにAPI Keyをハードコーディングすることは推奨されませんが、必要に応じてテスト目的で使用することはできます）：
- Windowsで環境変数を設定するには、Windowsのスタートボタンをクリックし、"environment "を検索して、"Edit the system environment variables "をクリックします。次に "Environment Variables "をクリックし、`MOMENTO_API_KEY`環境変数が設定されていることを確認してください。新しく作成した環境変数を認識させるためにUnityを再起動する必要があるかもしれません。
- C# スクリプトでAPI key をハードコードするには、API KEYをコピーして `Assets/TopicsTest.cs` に貼り付け、`ReadAuthToken()` 関数の `ADD_YOUR_TOKEN_HERE` を置き換えます。

API Keyが適切に設定されたら、Unity Editorの "Play "ボタンをクリックしてテストすることができます！

## まとめ

結論から言うと、MomentoとUnityを統合するには、最新の[MomentoSdkUnityリリース.zipファイル](https://github.com/momentohq/client-sdk-dotnet/releases)をダウンロードし、Unityの`Assets`フォルダ内の任意の場所に解凍するだけです。このチュートリアルでは、さらに一歩踏み込んで、Momentoトピックに接続し、簡単にメッセージを公開したり、メッセージを購読できるシンプルなチャットユーザーインターフェイスの設定方法を紹介します。