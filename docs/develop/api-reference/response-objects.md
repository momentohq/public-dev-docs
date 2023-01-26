---
sidebar_position: 5
sidebar_label: Response objects
title: Response object API reference
description: Learn how to interact with the response object in the Momento API.
slug: /develop/api-reference/response-objects
---

# Response objects

These are the baseline responses for all commands. Some commands will add more data and functionality.

Commands fall *generally* into two categories. Those which respond with Success or Error and those which respond with Hit, Miss, or Error.

### Response

A base class for all responses.

#### Constructor

- By default, no parameters.
- If any values are needed from the GRPC response, pass in the whole object. This makes it easier to use more values later, and it moves code out of the often quite bloated client class.

#### Methods

- toString(): string - a brief description of the response for debugging purposes. Each response should override toString() as needed. The default is to display the type of response (Hit, Miss, Success, etc.)

### Error extends Response

Returned in lieu of an exception.

#### Constructor

- innerException: Exception - the exception which caused the error

#### Methods

- message(): string - a human readable error message
- innerException(): Exception - the original exception.
- errorCode(): MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- toString(): string - alias for message()

### Success extends Response

The command was successful.

### Hit extends Response

For fetch commands, the key or field exists. Usually extended to return a value.

### Miss extends Response

For fetch commands, the key or field does not exist.