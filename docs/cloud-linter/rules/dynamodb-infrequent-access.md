# dynamodb-infrequent-access

Apply a pricing model better suited for infrequently-accessed data.

DynamoDB introduced the Standard-IA table class in 2021. The Standard-IA table class offers a lower price point for data storage, in exchange for higher costs to access that data. For some workloads, applying this pricing model can reduce costs by up to 60%.

Per DynamoDB documentation, the table class can be changed twice in a 30-day period. Selecting either the Standard or Standard-IA table class has no effect on table performance, availability, reliability, or durability.

### Suggested Action

To apply the Standard-IA table class to an existing DynamoDB table:
- navigate to the console page for the specified table
- select "Actions" from the upper right menu
- select "Update Table Class"
- set "Table Class" to "DynamoDB Standard-IA"
- click on "Save Changes".

Further Reading
- [Amazon DynamoDB - Table classes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.TableClasses.html)
- [Amazon DynamoDB - Evaluate your table class selection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CostOptimization_TableClass.html)
- [AWS Database Blog - Optimize the storage costs of your workloads](https://aws.amazon.com/blogs/database/optimize-the-storage-costs-of-your-workloads-with-amazon-dynamodb-standard-ia-table-class/)
