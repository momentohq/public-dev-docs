---
sidebar_position: 3
sidebar_label: Expiring data with TTL
title: Expiring data with Time to Live (TTL)
description: Learn about expiring data from a cache using Time to Live (TTL) in Momento Cache
---

# Momento CacheのTTL（Time-to-Live）でデータを失効させる。

このドキュメントでは、Momento Cache の TTL (time-to-live) 機能の概要を説明します。TTL を使用すると、指定した秒数後にキャッシュからアイテムが自動的に失効します。

<iframe width="560" height="315" src="https://www.youtube.com/embed/FDmk6RP8-b0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::note

Momento Cacheは、TTLの有効期限を処理し、毎月の転送コストで測定には加算されません。

:::

## 指定した秒数後にアイテムを失効させる
TTL値は、Momento Cacheがアイテムをストレージに書き込んでから、アイテムがキャッシュから失効するまでの秒数です。例えば、アイテムの TTL 値を 900 秒 (15 分) に設定した場合、アイテムはキャッシュに挿入されてから 15 分後に失効します。

## Momento CacheでTTLを設定する方法

以下のコードを複数の言語で記述した、より堅牢な例については、[Momento SDK を使用したアプリケーションの開発](../../develop/index.md)を参照してください。

TTL値を設定する場所は3つあります：

1. Momento SDK で CacheClient オブジェクトを作成するとき、接続に TTL 値を設定する必要があります。その値をオーバーライドしない限り、そのクライアントオブジェクトを使用する以降の SET 操作では、その TTL 値が使用されます。

    ```javascript
    const MY_DEFAULT_TTL = 60; // This value is in seconds
    const momento = CacheClient.create({
         configuration: Configurations.InRegion.Default.latest(),
         credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),
         defaultTtlSeconds: MY_DEFAULT_TTL
   });
    ```

2. SET 操作では、この操作のためだけに TTL 値を設定でき、CacheClient オブジェクトに設定されている TTL 値が上書きされます。

    ```javascript
    await momento.set(CACHE_NAME, 'key', 'my value', 40)
    // The number 40 is the TTL value in seconds for this item to expire and overrides the connection object's value.
    ```

    オプションで、SET操作からTTL値を完全に省略することができ、アイテムはキャッシュクライアントオブジェクトのTTL値を使用してキャッシュに挿入されます。

    ```javascript
    await momento.set(CACHE_NAME, 'key', 'my value')
    // If you omit the TTL value, this will use the connection object's value.
    ```

3. CLIを使用している場合、`momento configure`コマンドを実行すると、設定ファイル(~/.momento/config)が書き込まれ、デフォルトのTTLとして指定した値がそのファイルに保存されます。同じユーザーからCLIを使ってアイテムを書き込み、SET操作でTTLを指定しなかった場合、CLIはその設定ファイルの値を使用します。

:::note

設定ファイルをアプリケーションと一緒にコピーしない限り、そのファイルとその内容は `momento configure` コマンドを実行した場所に固有です。

:::

## TTLに関するよくある質問

<details>
  <summary>なぜキャッシュにはTTL（Time to Live）が必要なのか？</summary>

通常、キャッシュエントリはデータの一部の決定的なソースではありません。むしろ、キャッシュエントリは、異なるデータベースからの個々のレコード、複数のレコードやソースからの集約または計算された情報、あるいは外部のサードパーティアプリケーションからのリソースなど、データの一部を保存するための、より高速で、安価で、耐久性の低い方法です。キャッシュを使うことで、レイテンシーを改善したり、アプリケーションの依存関係の負荷を軽減したりすることができます。キャッシュを使うということは、キャッシュ・エントリがすぐに別のクライアントからリクエストされることを予期しているということです。

しかし、ほとんどのキャッシュは、すべてのエントリーを永久に保持するわけではありません。部分的には、これはデータの陳腐化を意味します。キャッシュエントリに保存されたデータは、時間の経過とともに変更される可能性があります。データの一貫性に関する要件が厳しい場合は、キャッシュエントリの基礎となるデータが変更されるたびに、キャッシュエントリを直接更新または削除する必要があるかもしれません。その他の状況では、一時的に古くなる可能性のあるデータを提供するのは構わないが、ある程度の鮮度を確保するために定期的に期限切れにする必要があるかもしれません。

二つ目の考慮点は、単純なリソースの制約にあります。キャッシュは通常RAMにデータを保持しますが、RAMは希少なリソースです。キャッシュのエントリーを一度も失効させないと、新しいアイテムをキャッシュしようとしたときにRAMがいっぱいになってしまうかもしれません。キャッシュは新しいエントリーを拒否するかもしれませんし、もっと可能性が高いのは、あらかじめ決められた退去アルゴリズムに基づいてアイテムを退去させることを選択するかもしれません。

ほとんどのキャッシュは、クラウド以前の世界を想定して構築されているため、キャッシュに利用可能な特定の量のメモリを事前に用意する必要があります。このようなキャッシュでは、TTLを適切に管理することが重要です。キャッシュを満杯にしすぎると、可用性の問題が発生したり、望ましくない方法でキャッシュが消去されたりする可能性があるからです。

対照的に、Momentoは最新のクラウドの弾力性のために設計されています。キャッシュのサイズを事前にプロビジョニングする必要はありません。Momentoキャッシュは、あなたがキャッシュに対して実行する操作に基づいて、自動的に拡張と縮小を行います。通常の運用では、Momentoは利用可能なメモリの不足に基づいてアイテムを削除することはありません。

とはいえ、Momento キャッシュのアイテムに TTL を使用することで、 キャッシュの陳腐化を防ぎ、コストを削減することができます。それでは、Momento の SimpleCache で TTL を使う方法を見てみましょう。
</details>

<details>
  <summary>設定できる最大TTLは？</summary>
デフォルトでは、アイテムに設定できるTTLの上限は24時間です。その時間を超えてもキャッシュにデータを保持する必要がある場合は、サポートに連絡してください。 <a href="mailto:support@momentohq.com">Momentoサポートの連絡先</a>.
</details>
