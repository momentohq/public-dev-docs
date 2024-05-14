# dynamodb-infrequent-access

アクセス頻度の低いデータに適した価格モデルを適用する。

詳細
DynamoDBは2021年にStandard-IAテーブルクラスを導入しました。Standard-IAテーブルクラスは、データへのアクセスコストが高い代わりに、データストレージの価格を低く設定しています。ワークロードによっては、この価格モデルを適用することで最大60%のコスト削減が可能です。

DynamoDBのドキュメントによると、テーブルクラスは30日間に2回変更できます。StandardまたはStandard-IAのテーブルクラスを選択しても、テーブルのパフォーマンス、可用性、信頼性、耐久性には影響しません。

### 提案された措置

既存のDynamoDBテーブルにStandard-IAテーブルクラスを適用するには：
- 指定したテーブルのコンソールページに移動します。
- 右上のメニューから "Actions "を選択します。
- Update Table Class "を選択します。
- Table Class "を "DynamoDB Standard-IA "に設定します。
- Save Changes "をクリックします。

さらに読む
- [Amazon DynamoDB - Table classes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.TableClasses.html)
- [Amazon DynamoDB - Evaluate your table class selection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CostOptimization_TableClass.html)
- [AWS Database Blog - Optimize the storage costs of your workloads](https://aws.amazon.com/blogs/database/optimize-the-storage-costs-of-your-workloads-with-amazon-dynamodb-standard-ia-table-class/)
