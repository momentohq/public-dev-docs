# dynamodb-delete-protection

Prevent accidentally deleting a table by enabling the `Delete Protection` dynamodb flag.

Per DynamoDB documentation, all active production tables should have the `Delete Protection` setting enabled, to prevent accidental deletion.

### Suggested Action

To apply the Standard-IA table class to an existing DynamoDB table:
- navigate to the console page for the specified table
- scroll over to `Additional Settings`
- Click `Turn on` under `Delete Protection
- select "Actions" from the upper right menu
- select `Confirm`

Further Reading
- [Amazon DynamoDB - Delete protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-deletion-protection.html)
- [Amazon DynamoDB - Using delete protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection)
