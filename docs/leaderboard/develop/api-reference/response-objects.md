---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Leaderboards
description: Learn how to interact with the response object in the Momento API for Leaderboards.
---

# Response objects from Momento APIs in Momento Leaderboard

These are the baseline responses for all commands. Some commands will add more data and functionality.

## Error

Returned in lieu of an exception.

### Constructor

- innerException: Exception - the exception which caused the error

### Methods

- message(): String - a human readable error message
- innerException(): Exception - the original exception.
- errorCode(): MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- toString(): String - alias for message()

## Success

The command was successful.

## Found

The leaderboard existed and the requested values were fetched.

## NotFound

The leaderboard did not exist or the requested values were not found.