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
Unityのダウンロードとインストールを待つ間、オプションで[Momento console](https://console.gomomento.com)を使ってMomento側の設定を行うことができます。注意: このステップは、独自の API Auth Token を設定する場合にのみ必要です。このチュートリアルの残りの部分では、メインの [Momento Moderated Chat](https://github.com/momentohq/moderated-chat/) アプリケーションの一部として既にデプロイされている [Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を利用するので、このステップは必要ありません。ただし、[Unity demo repository](https://github.com/momentohq/momento-unity-demo)には、独自のMomento Topicを利用できる2つのUnityシーンが含まれています。詳しくは、以下の[Example Scenes](#example-scenes)を参照してください。

1. [Momentoコンソール](https://console.gomomento.com)で、メールアドレスを入力するか、既存のGoogleまたはGitHubアカウントをリンクすることでアカウントを作成できます。
2. コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：
[キャッシュ作成ボタン](/img/console-create-cache.png)
3. `Unity-Topics-Cache`というキャッシュを作成します。キャッシュはクラウドプロバイダー、AWSまたはGCPのいずれかを選択し、任意のリージョンに作成できます。
4. `Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`Unity-Topics-Cache`キャッシュが表示されます。キャッシュを作成した地域もキャッシュのリストに表示されます。次のステップで Momento API Keyを生成するときに、同じ地域を選択する必要があります。
[チャットキャッシュ](/img/unity/Unity-Topics-Cache.png)
5. [API Key](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダーとリージョンを選択し、`Super User API Key` トークンタイプを選択し、`Generate API Key` ボタンをクリックします。
![Generate token](/img/console-generate-api-key.png)
6. `APIキー`をコピーして安全な場所に保存してください。後でUnityチャットアプリケーションを設定する際に使用できます。
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
5. Unity 2022.3.9f1以外のバージョンを使用している場合、Unityにプロジェクトのエディタバージョンを適切に変更させる必要があるかもしれません。
6. Unityプロジェクトがロードされたら、`MomentoTopicsDemo-ModeratedChat.unity`シーンファイルを開きます。プロジェクトには、様々なレベルの機能を示すいくつかのシーンファイルがあります。Moderated Chat シーンは、メインの[Momento Moderated Chat](https://github.com/momentohq/moderated-chat/)アプリケーションのUnityクライアントを提供します。[How to use webhooks and Momento Topics to build a multi-language chat app](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app)のブログ記事も参照してください。
このチュートリアルの残りは、サンプルリポジトリを利用します。

### UnityにMomento .NET SDKを追加する
プロジェクトを開けたら
1. 最新の[MomentoSdkUnityリリース.zipファイル](https://github.com/momentohq/client-sdk-dotnet/releases)をダウンロードします。例えば、[v1.31.1 リリース](https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.31.1) の場合は、[MomentoSdkUnity-1.31.1.zip](https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.31.1/MomentoSdkUnity-1.31.1.zip) をダウンロードします。この.zipファイルには、UnityのHTTP/2互換性の制限のためにgRPC-Webを利用するMomento .NET SDKの特別なバージョンが含まれています。必要な DLL の依存関係も zip に含まれています。
4. フォルダ `Assets/MomentoSdkUnity` 内に解凍します。

## MomentoトピックでUnityチャットアプリケーションを構築する
このステップまでくれば、[Momento .NET SDK](https://docs.momentohq.com/cache/develop/sdks/dotnet)を介してMomentoトピックに接続するためのユーザーインターフェイスの構築とC#スクリプトの作成を開始する準備が整ったことになります。

このチュートリアルでは、クローンされたリポジトリにある既存のサンプルコードを利用し、以下の2つのセクションでUIとC#コードがどのようにセットアップされているかの概要を説明します。

### ユーザーインターフェースの理解
私たちのサンプルプロジェクトでは、ユーザーインターフェイスはすでに3つの別々の[Unity UI Canvas](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html)要素にビルドアウトされています。1つはユーザーに名前を選択させるためのもの、1つは実際のチャットUIのためのもの、そして1つはユーザーにエラーを伝えるためのものです。

以下に示すように、NameCanvasには[TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/)入力フィールドと「Start」ボタンが含まれています。

![NameCanvas](/img/unity/NameCanvas.png)

ユーザーが名前を入力した後、Enterキーを押すか、"Start "ボタンをクリックすると、チャットアプリケーションが起動します。そうすると、C# スクリプトは NameCanvas を非表示にし、MessagingCanvas を表示します。

MessagingCanvasはまた、Unityのモデレートチャットクライアントを完成させるためにいくつかの追加機能を持っています：
- UIの右上にあるドロップダウンセレクトメニューで、様々な言語の翻訳を切り替えることができます。
- チャットアプリケーションをロードしている時に表示されるビューの中央のローディングサークルアニメーション
- サードパーティの[UnityStandaloneFileBrowser](https://github.com/gkngkc/UnityStandaloneFileBrowser)を利用して、ユーザーがチャットメッセージで送信するためにコンピュータから画像をロードできるようにする右下の画像ボタン。

### Example Scenes
サンプルコードでは、Momento SDKとUnityを統合する様々な方法を紹介する4つのUnityシーン例を提供しています。最初の2つは、環境変数 `MOMENTO_AUTH_TOKEN` が設定されていることを確認するか、認証トークンをコピーして `Assets/Scripts/TopicsTest.cs` (または `Assets/Scripts/TopicsTestCoroutine.cs`) に貼り付け、`ReadAuthToken()` 関数の `ADD_YOUR_TOKEN_HERE` を置き換える必要があります (認証トークンをコードにハードコードすることは推奨されませんが、必要に応じてテスト目的で使用できます)。
- `MomentoTopicsDemo.unity` (using `TopicsTest.cs`): `Task.Run()` を利用して、バックグラウンドのスレッドで Momento Topic のサブスクリプションを実行します。これは上記のアプローチです。このコードは、[Momento .NET SDK Topic Example](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample) に基づいています。
- `MomentoTopicsDemo-Coroutine.unity`（`TopicsTestCoroutine.cs`を使用）：メインスレッドでサブスクリプションを非同期に実行するためにUnity Coroutinesを利用する以外は、前のシーンと同じです。
- `MomentoTopicsDemo-TokenVendingMachine.unity` (using `TopicsTestTokenVendingMachine.cs`): 例の [Momento Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) を利用して、一時的な制限付きスコープの Momento 認証トークンを取得します。(2) トピックメッセージに埋め込まれた `tokenId` を利用することで、特定のメッセージを送信したクライアント/ユーザ名をより安全に知ることができます。TokenVendingMachineを別途明示的にセットアップし、`TopicsTestTokenVendingMachine.cs`で指定した `tokenVendingMachineURL` 変数でそのURLを指定する必要があることに注意してください。
- `MomentoTopicsDemo-ModeratedChat.unity` (いくつかのヘルパースクリプトと共に `ModeratedChat.cs` を使用): 公開されている Momento モデレートチャットデモのバックエンド (https://github.com/momentohq/moderated-chat/tree/main と https://chat.gomomento.com/ を参照) を利用して、公開チャットデモに接続します。これはチャットのクライアントなので、C#コードのほとんどはすでに存在するJavascriptの[フロントエンドウェブクライアント](https://github.com/momentohq/moderated-chat/tree/main/frontend)を踏襲しています。

### (optional) Momento APIキーの追加
上記の[サンプルシーン](#example-scenes)で述べたように、状況によってはUnityプロジェクトで認証トークンを設定する必要があります。ここでは例として `Assets/Scripts/TopicsTest.cs` を使用します。

まず最初に、C#スクリプトに[Momento Prerequisite](#momento)ステップで作成したAPIキーを知らせる必要があります。[Momento .NET SDKトピックの例](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample)に従い、環境変数からAPIキーを取得するか、コードにAPIキーをハードコードします(コードにAPIキーをハードコードすることは推奨されませんが、必要に応じてテスト目的で使用することができます。[トークン自動販売機](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine)を使用する別の方法は、上記の[シーンの例](#example-scenes)で説明されています)：
- Windowsで環境変数を設定するには、Windowsのスタートボタンをクリックし、"environment "を検索して、"Edit the system environment variables "をクリックします。次に "Environment Variables "をクリックし、`MOMENTO_API_KEY`環境変数が設定されていることを確認します。新しく作成した環境変数を認識させるためにUnityを再起動する必要があるかもしれません。
- C# スクリプトで API キーをハードコードするには、API キーをコピーして `Assets/Scripts/TopicsTest.cs` に貼り付け、`ReadAuthToken()` 関数の `ADD_YOUR_TOKEN_HERE` を置き換えます。

APIキーが適切に設定されたら、Unity Editorの "Play "ボタンをクリックしてテストすることができます！

## 結論

結論から言うと、MomentoとUnityを統合するには、最新の[MomentoSdkUnityリリース.zipファイル](https://github.com/momentohq/client-sdk-dotnet/releases)をダウンロードし、Unityの`Assets`フォルダ内の任意の場所に解凍するだけです。このチュートリアルでは、さらに一歩踏み込んで、Momentoトピックに接続して、簡単にメッセージを公開したり、メッセージを購読したりできるシンプルなチャット・ユーザー・インターフェースのセットアップ方法を紹介します。具体的には、公開されているモデレートチャットアプリケーション https://chat.gomomento.com/ の Unity クライアントをデモしました。
