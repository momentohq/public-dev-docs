---
sidebar_position: 11
sidebar_label: Response objects
title: Response object API reference in Momento Topics
description: Learn how to interact with the response object in the Momento API for Momento Topics.
---

# Response objects from Momento APIs in Momento Topics

Momento response objects extend from a parent class, have child types such as `Success` and `Error,` and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a `Success` or an `Error`, and then branches accordingly. Using this approach, you get a type-safe response object that you can use to get more information.

---

## Error

Errors that occur in calls to the Momento Leaderboards service are surfaced to developers as part of the return values of the calls rather than thrown exceptions. This helps to ensure your application doesn't crash at runtime, makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why [Exceptions are bugs](https://www.gomomento.com/blog/exceptions-are-bugs), and send us any feedback you have!

### Available methods

- `message()`: String - a human readable error message
- `innerException()`: Exception - the original exception.
- `errorCode()`: MomentoErrorCode - Momento’s own category of errors such as InvalidArgument or BadRequest. See [Standards And Practices - Error Handling](https://github.com/momentohq/standards-and-practices/blob/main/docs/client-specifications/error-handling.md)
- `toString()`: String - alias for message()

---

## Success

Generic response object indicating a successful request with no additional methods attached.

Variations of the Success response object include:

### Subscription

Indicates a successful Momento Topics subscription.

Available methods include:

- `unsubscribe()`: void - closes the topics subscription.

Depending on the language, you may use a callback function or an iterator to receive new subscription events, such as items, heartbeats, and discontinuities:
- Items include a string or byte message, topic sequence number, and a unique token identifier if one is present ([learn more](https://www.gomomento.com/blog/momento-topics-just-got-more-secure-introducing-embedded-token-identifiers)).
- Heartbeats indicate that the connection is still active.
- Discontinuities indicate that there was an interruption in the subscription and some messages may have been skipped.
