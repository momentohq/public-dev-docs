---
sidebar_position: 7
sidebar_label: Vercel
title: MomentoとVercelアプリの統合
description: Momento Javascript Web SDK を使って Vercel にチャットアプリをデプロイする方法を学びます。
pagination_next: null
---

[Vercel](https://vercel.com/)は、モダンなウェブサイトやアプリを構築、デプロイ、スケーリングするための人気なプラットフォームです。
Vercelはまた、[Next.js](https://nextjs.org/)のクリエイターであり、メンテナーでもあります。
彼らのプラットフォームは、高速なグローバルエッジネットワーク、サーバーレスのスケーラビリティ、最も人気のあるGitプロバイダーとシームレス統合しデプロイできる仕組みを提供しています： [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)。

このチュートリアルでは、[Javascript SDK](https://github.com/momentohq/client-sdk-javascript) のシンプルなサンプル [Next.js チャットアプリケーション](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) を使用します。チュートリアル終了時には、ブラウザベースのリアルタイムチャットアプリケーションが完成し、友達をチャットに招待するためのURLで実行できるようになります。

## 前提条件

このアプリをデプロイして実行するには、以下のものが必要です：

- [GitHub](https://github.com/)、[GitLab](https://gitlab.com)、[Bitbucket](https://bitbucket.org/)などのGitプロバイダーのアカウント。
- [Vercel](https://vercel.com/)のアカウント。
- 個人リポジトリにある[Momento Javascript SDK](https://github.com/momentohq/client-sdk-javascript)のコピーまたはフォーク。

Vercelアカウントを取得し、GitプロバイダーアカウントにMomento Javascript SDKのコピーまたはフォークを取得したら、[Momentoコンソール](https://console.gomomento.com)を使ってMomento側を設定する準備をしていきます。コンソールにアカウントを作成するには、メールアドレスを入力するか、既存の Google または GitHub アカウントをリンクします。コンソールにログインしたら、ページの右上にある `Create Cache` ボタンをクリックします：

![Create Cache button](/img/console-create-cache.png)

例えば、`chat`というキャッシュを作成します。キャッシュはAWSかGCPの好きなクラウドプロバイダーに、好きなリージョンで作成できます。

![Create cache form](/img/console-create-cache-form.png)

`Create`ボタンを押すと、利用可能なキャッシュのリストに新しい`chat`キャッシュが表示されます。

![Chat cache](/img/console-caches-chat.png)

キャッシュを作成したリージョンの情報もキャッシュのリストに表示されているため、その情報を参考にしつつ次のステップでMomento authトークンを生成する際に、同じリージョンを選択する必要があります。[tokens](https://console.gomomento.com/tokens)ページに移動し、キャッシュの作成に使用したクラウドプロバイダとリージョンを選択し、`Super User API KEY` keyタイプを選択し、`Generate API KEY` ボタンをクリックします。

![Generate token](/img/console-generate-api-key.png)

`API Key`をコピーして安全な場所に保存してください。後でVercelのデプロイを設定する際に、チャットアプリで使用する環境変数として追加する必要があります。
![Generated token](/img/console-api-key-result.png)

## Vercelを使ったデプロイ

いよいよVercelにログインして、アプリケーションの設定とデプロイを行います。前述したように、リポジトリで利用可能なMomento Javascript SDKのコピーが必要です。この例では、[オリジナル](https://github.com/momentohq/client-sdk-javascript) からフォークした GitHub リポジトリからデプロイします。

![Fork SDK Repository](/img/github-fork-js-sdk.png)

Vercelにログイン後、`Overview`ページに移動し、`Create a New Project`ボタンを押してください。

![Vercel overview page](/img/vercel-overview.png)

利用可能なリポジトリのリストから、`client-sdk-javascript`の`Import`ボタンを押します。

![Vercel import repository](/img/vercel-import-repository.png)

次の画面では、デプロイの設定を行います。Momento Javascript SDK のサブディレクトリからサンプルアプリケーションをデプロイするので、ページの `Configure Project` セクションで `Root Directory` を設定する必要があります。チャットサンプルのパスは `/examples/web/nextjs-chat` ですので、`Edit` ボタンを使って `examples` -> `web` -> `nextjs-chat` に移動し、`Root Directory` として入力します。

![Vercel root directory](/img/vercel-root-directory.png)

選択したディレクトリの横にNext.jsのアイコンがあることに注目してください。Vercelはディレクトリの中身を調べ、私たちのプロジェクトがNext.jsを使っていることを検出します。
この自動検出のおかげで、`Build and Output Settings`セクションはそのままにしておくことができます。プロジェクトに適したデフォルト値が選択されます。

このアプリケーションで使用するために、先ほどMomento authトークンを生成して保存したことを思い出してください。ビルド設定の下にある `Environment Variables` セクションを使用して、`MOMENTO_API_KEY` を名前、生成したトークンを値として環境変数を追加します。次に、`NEXT_PUBLIC_MOMENTO_CACHE_NAME`をキー、`chat`を値とする2つ目の環境変数を追加して、アプリを先ほど作成したキャッシュに向けます。

![Vercel environment variables](/img/vercel-environment-variables.png)

以上でデプロイの設定は完了です。`Deploy`ボタンを押すと、アプリが公開されます！

デプロイ中、Vercelはサイトの構築と公開のために行っていることを示す詳細なログを表示し、必要に応じてデプロイの失敗を報告してトラブルシューティングを支援します。すべてが計画通りに進んだ場合は、デプロイの成功を確認するページに移動します。

![Vercel deployment confirmation](/img/vercel-deployment-confirmation.png)

`Continue to Dashboard`ボタンをクリックすると、デプロイメントの詳細情報が表示されます。

![Vercel production deployment](/img/vercel-production-deployment.png)

これで友達とチャットする準備ができました！ここで選べるURLはいくつかありますが、`Domains`セクションにある最もシンプルなものを使いましょう。もちろん、本番用のアプリであればカスタムドメインを設定するでしょうが、私たちの目的には生成されたvercel.appのURLで十分です。

`client-sdk-javascript.vercel.app`のリンク（あなたのURLはおそらく異なるでしょう）をクリックすると、チャットアプリのロビー画面が表示されます。チャットルームの名前は`chat`とします。どんな名前でもかまいませんが、`chat`を使うと覚えやすく、共有しやすくなります。存在しない場合は、チャットルームが作成されます。

![Chat app lobby](/img/nextjs-chat-app-lobby.png)

最後のステップは、チャットのユーザー名を選択することです。

![Chat app username](/img/nextjs-chat-app-username.png)

あとは、チャットに招待したい人たちとURL、キャッシュ、ルーム名を共有するだけです！

![Chat app chat](/img/nextjs-chat-app-chat.png)

## まとめ

この簡単なチュートリアルで、VercelでMomentoを搭載したアプリケーションをデプロイすることがいかにシンプルで簡単であるかをご理解いただけたと思います。もちろん、[このチャットの例](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) も自由に触ってみてください。特にポーリングやweb socketsなどの代替アプローチと比較した場合、チャットを動かすMomento Topic機能のシンプルさを楽しんでいただければと思います。また、Momento を使用してお客様が今後どのようなものを構築し、Depolyするかを楽しみにしています！
