---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference
pagination_next: null
description: Learn how to interact with the response object in the Momento API.
slug: /develop/api-reference/response-objects
---

# Response objects

These are the baseline responses for all commands. Some commands will add more data and functionality.

Commands fall *generally* into two categories. Those which respond with Success or Error and those which respond with Hit, Miss, or Error.

### Error

Returned in lieu of an exception.

#### Constructor

- innerException: Exception - the exception which caused the error

#### Methods

- message(): String - a human readable error message
- innerException(): Exception - the original exception.
- errorCode(): MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- toString(): String - alias for message()

### Success

The command was successful.

### Hit

The key or field exists in the cache. Usually extended to return a value.

### Miss

The key or field does not exist in the cache.

### Set

For TTL commands, the update was applied successfully.

### NotSet

For TTL commands, the update was not applied and no change was made to the existing TTL.

### Stored

For setIfNotExists commands, the key did not exist and the value was set.

### NotStored

For setIfNotExists commands, the key existed and no value was set.
