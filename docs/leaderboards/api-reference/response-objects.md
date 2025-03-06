---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Leaderboards
description: Learn how to interact with the response objects in the Momento API for Leaderboards.
---

# Response objects from Momento APIs in Momento Leaderboards

Momento response objects extend from a parent class, have child types such as `Success` and `Error,` and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a `Success` or an `Error`, and then branches accordingly. Using this approach, you get a type-safe response object that you can use to get more information.

---

## Error

Errors that occur in calls to the Momento Leaderboards service are surfaced to developers as part of the return values of the calls rather than thrown exceptions. This helps to ensure your application doesn't crash at runtime, makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why [Exceptions are bugs](https://www.gomomento.com/blog/exceptions-are-bugs), and send us any feedback you have!

### Available methods

- `message()`: String - a human readable error message.
- `innerException()`: Exception - the original exception.
- `errorCode()`: MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md).
- `toString()`: String - alias for message().

---

## Success

Generic response object indicating a successful request with no additional methods attached. 

Variations of the Success response object include:

### LeaderboardFetch

Indicates a successful fetch request. Available methods include:

- `values()`: List - returns a list of records containing the fields `id`, `score`, and `rank`

### LeaderboardLength

Indicates a successful length request. Available methods include: 

- `length()`: Integer - returns the number of elements in the specified leaderboard
