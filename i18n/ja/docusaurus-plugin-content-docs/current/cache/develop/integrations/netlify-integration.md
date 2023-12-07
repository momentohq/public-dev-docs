---
sidebar_position: 6
sidebar_label: Netlify
title: Integrate Momento With Netlify
description: Learn to deploy a chat app using Momento Javascript Web SDK to Netlify.
---

# NetlifyアプリとMomentoをIntegrateする

[Netlify](https://www.netlify.com/)は、モダンなウェブサイトやアプリを構築、デプロイ、スケーリングするための人気のプラットフォームです。先進的なグローバルCDN、Gitに統合されたCI/CD、無料の自動HTTPSサポートなどを提供しています。デプロイプロセスは Git リポジトリと直接統合されており、最初のデプロイはリポジトリの選択と同じくらい簡単です。いったんデプロイされると、サイトやアプリの更新は変更を Git にプッシュすることで自動的に行われます。

このチュートリアルでは、[Javascript SDK](https://github.com/momentohq/client-sdk-javascript) のシンプルなサンプル [Next.js チャットアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) を使います。このチュートリアルでは、[Next.jsチャットアプリケーション]() の簡単な例を使います。このチュートリアルが終わるころには、ブラウザベースのリアルタイムチャットアプリケーションが完成し、そのURLで友達をチャットに招待できるようになっていることでしょう。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)などのGitプロバイダーのアカウント。
- [Netlify](https://www.netlify.com/)のアカウント。
- 個人リポジトリに[Momento Javascript SDK](https://github.com/momentohq/client-sdk-javascript)のコピーまたはフォークがあること。

Netlify のアカウントと、Git プロバイダーのアカウントに Momento Javascript SDK のコピーまたはフォークがあれば、[Momento コンソール](https://console.gomomento.com) を使って Momento 側を設定する準備が整います。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](/img/console-create-cache.png)

`chat`というキャッシュを作成します。キャッシュはAWSかGCPの好きなクラウドプロバイダーに、好きなリージョンで作成できます。

![Create cache form](/img/console-create-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`chat`キャッシュが表示されます。

![Chat cache](/img/console-caches-chat.png)

キャッシュを作成した地域もキャッシュのリストに表示されていることに注意してください。次のステップでMomento認証トークンを生成する際に、同じリージョンを選択する必要があります。[api-keys](https://console.gomomento.com/api-keys)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択し、`Super User Key` トークンタイプを選択し、`Generate Key` ボタンをクリックします。


![Generate Key](/img/console-generate-api-key.png)

`API Key`をコピーして安全な場所に保存してください。後でNetlifyのデプロイを設定する際に、チャットアプリで使用する環境変数として追加する必要があります。

![Generated Key](/img/console-api-key-result.png)

## Netlifyを使ったデプロイ

いよいよ Netlify にログインして、アプリケーションの設定とデプロイを行います。前述したように、リポジトリに Momento Javascript SDK のコピーが必要です。この例では、[オリジナル](https://github.com/momentohq/client-sdk-javascript) からフォークした GitHub リポジトリからデプロイします。

![Fork SDK Repository](/img/github-fork-js-sdk.png)

Netlify にログインした後、チームの `Sites` ページに移動し、`Add New Site` -> `Import an Existing Project` を選択します。

![Netlify Add Site Button](/img/netlify-add-site.png)

Gitプロバイダーを選択すると、リポジトリの一覧が表示されます。

![Netlify Git providers](/img/netlify-git-providers.png)

利用可能なリポジトリのリストから、`client-sdk-javascript`を選択します。

![Netlify repository list](/img/netlify-repo-list.png)

次の画面では、デプロイの設定を行います。`main`ブランチからデプロイします。Momento Javascript SDK のサブディレクトリからサンプルアプリケーションをデプロイするので、ページの `Build settings` セクションで `Base directory` を設定する必要があります。チャットサンプルのパスは `/examples/web/nextjs-chat` なので、`Base directory` にそれを入力します。

ベースディレクトリが正しく入力されていれば、いくつかのマジックが起こるはずです。Netlifyはベースディレクトリの中身を調べ、私たちのプロジェクトがNext.jsを使っていることを検出しました。これで、ビルド設定フォームの残りの部分を埋めてくれるようになりました。Netlifyが選んだ値は良さそうなので、設定の最終段階である環境変数に進むことができます。

![Netlify build settings](/img/netlify-build-settings.png)

このアプリケーションで使用するために、先ほどMomento APIキーを生成して保存したことを思い出してください。ビルド設定の下にある `Add environment variables` ボタンを使って、`MOMENTO_API_KEY` をキー、生成したトークンを値とする環境変数を追加します。次に、`NEXT_PUBLIC_MOMENTO_CACHE_NAME`をキー、`chat`を値として2つ目の環境変数を追加し、アプリを先ほど作成したキャッシュに向ける。以上でデプロイの設定は完了だ。Deploy client-sdk-javascript`ボタンを押すと、アプリがデプロイされます。

デプロイ中、Netlifyはあなたのサイトを構築し、公開するために何を行っているかを示す詳細なログを表示し、必要に応じてデプロイの失敗を報告し、トラブルシューティングを支援します。すべてが計画通りに進んでいれば、デプロイメントを要約したページが表示されます。

![Netlify site published](/img/netlify-published-site.png)

これで友達とチャットする準備ができました！左のナビの`Site overview`に移動して、あなたのサイトに生成されたURLを見つけてください。もちろん、本番用のアプリであればカスタムドメインを設定するでしょうが、生成されたnetlify.appのURLで十分です。

![Netlify site overview](/img/netlify-site-overview.png)

概要にある`https://charming-salmiakki-e07713.netlify.app/`リンクをクリックすると（もちろんあなたのURLは違うでしょう）、チャットアプリのロビー画面が表示されます。チャットルームの名前は `chat` とします。どんな名前でもかまいませんが、`chat`を使うと覚えやすく、共有しやすくなります。存在しない場合はチャットルームが作成されます。

![Chat app lobby](/img/nextjs-chat-app-lobby.png)

最後のステップは、チャットのユーザー名を選択することです。

![Chat app username](/img/nextjs-chat-app-username.png)

あとは、チャットに招待したい人たちとURL、キャッシュ、ルーム名を共有するだけです！

![Chat app chat](/img/nextjs-chat-app-chat.png)

## 結論

この簡単なチュートリアルで、Netlifyを使ってMomentoを搭載したアプリケーションをデプロイすることがいかにシンプルで簡単であるかを理解していただけたと思います。もちろん、[このチャットのコード](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) にも自由に飛び込んでみてください。特にポーリングやウェブソケットなどの代替アプローチと比較した場合、チャットを動かすMomentoトピック機能のシンプルさを楽しんでいただければと思います。また、Momento を使用してお客様が今後どのようなものを構築し、展開されるかを楽しみにしています！
