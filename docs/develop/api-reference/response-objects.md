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

- message(): string - a human readable error message
- innerException(): Exception - the original exception.
- errorCode(): MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- toString(): string - alias for message()

### Success

The command was successful.

### Hit

For fetch commands, the key or field exists in the cache and there is a "cache hit". Usually extended to return a value.

### Miss

For fetch commands, the key or field does not exist and it a "cache miss."
For update/increase/decreaseTtl commands, the update was not applied due to key not being present.

### Set

For update/increase/decreaseTtl commands, the update was applied.

### NotSet

For update/increase/decreaseTtl commands, the update was not applied and no change was made to the existing TTL.
