---
sidebar_position: 4
Title: Tutorial - Read-aside caching
---

# Read-aside caching with Momento Serverless Cache

In the previous step, we installed and configured Momento within our serverless application. As part of that, we learned some important details about the Lambda lifecycle that will help with performance, particularly when making external network calls from our application.

In this step, we'll actually implement caching in our application. Before we do so, we will learn some key concepts about caching strategies. Then, we'll implement a read-aside cache in our serverless application.

If you want to skip the concepts and go directly to the implementation, navigate ahead to the [implementation section](#implementing-a-read-aside-caching-strategy).

## Key concepts on caching strategies

There are a number of different reasons for adding caching to your application, as well as a variety of caching strategies that you can use to accomplish your goals. In general, you have to make choices on three factors in choosing a caching strategy:

- **Where to cache:** Is my cache local to my application process or does it require a network call to a remote instance?

- **When to cache:** Do I update my cache lazily, after a read from the primary data source, or do I update my cache optimistically, after performing a write operation?

- **How to cache:** Is my cache a generic store for any type of application data I choose, or is the cache specifically designed for integration with my underlying data source?

Making the proper choice on each of these factors is important to implementing a caching strategy that works for your application. For more on each of these factors and various combinations, check out our [guide to caching strategies](./../../../introduction/common-caching-strategies).

In this example, we will use a read-aside caching strategy (also called a "lazy-loading" strategy). In a read-aside caching strategy, you first try to read your cached entry from a remote cache whenever your object is requested. If the object does not exist in the cache, then you fallback to reading the object from the primary data source. After retrieving from the primary data source, you store the object in your cache before returning so it's available the next time it is requested.

This is the most common caching strategy due to its simplicity and applicability to a wide range of applications. Let's see how it breaks down on the three factors above.

First, it uses a _remote_ caching strategy, as our application will reach out to Momento to check for cached values.

While a local, in-memory caching strategy is easier to implement, a remote cache is a common choice. A local cache strategy has a lower cache hit rate since the hit rate decreases as the number of instances running your application increase. Given what we know about the Lambda function runtime, where we could have a large number of function instances handling our requests, a remote cache is a better fit for our needs.

Second, it chooses to cache our data at read time.

We will insert items into the cache only after a previous attempt to read from the cache fails, necessitating a fallback to the primary data source. This is the simplest pattern to implement, but it can result in stale reads when the underlying data changes as well as a lower cache hit rate. We'll talk more about this in the next step.

Finally, it uses a _cache-aside_ mechanism rather than an _inline_ approach.

We'll use Momento Serverless Cache, a serverless key-value cache, to store any data we want, rather than an inline cache that has a tight integration with Amazon DynamoDB. DynamoDB does have Amazon DynamoDB Accelerator (DAX) as an inline cache for DynamoDB. However, it is not serverless, requires the use of a VPC and complicated network configuration that are not a good fit for a serverless application. The cache-aside strategy with Momento Serverless Cache is a better approach here.

Now that we know the three factors to consider in choosing our caching strategy and the reasons we chose a read-aside strategy, let's get to work implementing this in our application.

## Implementing a read-aside caching strategy

Head back to the code for your serverless application. To implement our read-aside cache strategy, we will update our code to use the cache whenever fetching individual records with our service.

Navigate back to the service code in `src/accounts/service.js`. Update the getUser method on our AccountService class to the following:

    async getUser({ username }) {
      const user = new User({ username });
      const userCacheKey = `USER#${user.username}`;

      let getResp = await this._cacheClient.get(
        CACHE_NAME,
        userCacheKey
      );
      if (getResp.status === CacheGetStatus.Hit) {
        const cacheContent = JSON.parse(getResp.text());
        return cacheContent ? itemToUser(cacheContent) : null;
      }

      const response = await this._dynamoDBClient
        .getItem({
          TableName: TABLE_NAME,
          Key: user.keys(),
        })
        .promise();

      await this._cacheClient.set(
        CACHE_NAME,
        userCacheKey,
        JSON.stringify(response.Item || ""),
        60
      );

      return response.Item ? itemToUser(response.Item) : null;
    }

There are three changes to our code.

First, we've defined the string template for our User cache key, which is "_USER#{user.username}"._ Like most caches, Momento is a key-value store. We will retrieve specific cache entries by their key and thus we need a defined format for generating and retrieving that key. Because this function is the only place that we will use the key for a User entry, we can declare it inline.

Second, we add logic to attempt to retrieve the entry from our cache using the cache key. If the response indicates that there was a hit from the cache, we will retrieve the value and return it to the caller. If it was a cache miss, then we'll continue on to read from the database.

Finally, we add code to store the User item in our cache after retrieving it from our DynamoDB table. This ensures that the User item will be around for the next request that needs to retrieve the User.

Note two things about storing the User item. First, a GetItem response from DynamoDB can be empty, indicating that the item does not exist in DynamoDB. However, we are storing the response in our cache either way. This will ensure our application will get caching benefits even for objects that are requested but don't exist.

Second, we are setting a time-to-live ("TTL") value of 60 seconds. This tells Momento how long to keep the cache entry in the cache before deleting it. Any request made within this period will benefit from the cached value, while expiration of the entry will require a slower request to the primary data source.

Choosing the proper TTL value depends on your application needs, including how frequently an object is retrieved following an initial request and whether the underlying data is likely to change. For more on this, check out the section on TTL values in our caching concepts documentation.

For now, we're using a relatively short TTL of only 60 seconds. This is mostly because we're caching only on the read side. Because this underlying data can change, we want to expire it quickly to prevent a confusing experience for our users. In the next step, we'll see how to integrate caching on the write side to allow for a longer TTL.

Finally, we need to update some imports and global variables for our service module. Add the following code to the top of your src/accounts/service.js file:

    const { CacheGetStatus } = require("@gomomento/sdk");
    const TABLE_NAME = process.env.TABLE_NAME;
    const CACHE_NAME = process.env.CACHE_NAME;

The import is used when checking the result of the cache retrieval request, and the CACHE_NAME variable is used for all caching operations.

Let's implement similar logic for our Organization and Membership objects as well.

In the `src/accounts/service.js` file, update the `getOrganization` method to look as follows:

    async getOrganization({ organizationName }) {
      const organization = new Organization({ organizationName });
      const organizationCacheKey = `ORG#${organization.organizationName}`;

      let getResp = await this._cacheClient.get(
        CACHE_NAME,
        organizationCacheKey
      );
      if (getResp.status === CacheGetStatus.Hit) {
        const cacheContent = JSON.parse(getResp.text());
        return cacheContent ? itemToOrganization(cacheContent) : null;
      }

      const response = await this._dynamoDBClient
        .getItem({
          TableName: TABLE_NAME,
          Key: organization.keys(),
        })
        .promise();

      await this._cacheClient.set(
        CACHE_NAME,
        organizationCacheKey,
        JSON.stringify(response.Item || ""),
        60
      );

      return response.Item ? itemToOrganization(response.Item) : null;
    }

Notice that it follows a similar pattern as the User caching implementation. We define the cache key pattern for the Organization item. Then we try to retrieve a cached Organization entry and return it if it exists. If not, we fetch it from DynamoDB, store it in our cache, and return it to the caller.

Finally, in the `src/accounts/service.js` file, update the `getMembership` method to look as follows:

```
async getMembership({ organizationName, username }) {
  const membership = new Membership({
    organizationName,
    memberUsername: username,
  });
  const membershipCacheKey = `MEMBER#${membership.organizationName}#${membership.memberUsername}`;

  let getResp = await this._cacheClient.get(
    process.env.CACHE_NAME,
    membershipCacheKey
  );
  if (getResp.status === CacheGetStatus.Hit) {
    const cacheContent = JSON.parse(getResp.text());
    return cacheContent ? itemToMembership(cacheContent) : null;
  }

  const response = await this._dynamoDBClient
    .getItem({
      TableName: TABLE_NAME,
      Key: membership.keys(),
    })
    .promise();

  await this._cacheClient.set(
    process.env.CACHE_NAME,
    membershipCacheKey,
    JSON.stringify(response.Item || ""),
    60
  );

  return response.Item ? itemToMembership(response.Item) : null;

}
```

Notice that it follows a similar pattern as the User and Organization caching implementations.

Before we deploy, let's make one final note. We've implemented very simple caching of individual objects in our application. Those will certainly help readers that use our REST endpoints to retrieve a User, Organization, or Membership by reducing latency for cached items.

However, the caching will help for other endpoints as well. Take a look at the createOrganization method for our AccountService:

    async createOrganization({ organizationName, foundingUser }) {
      const user = await this.getUser({ username: foundingUser });
      if (!user) {
        throw new UserDoesNotExistError(foundingUser);
      }
      ...
    }

Before creating a new Organization, our code first checks to ensure the creating User exists. It is calling into the same getUser method that would be used by our endpoint to retrieve a User, so both methods are improved by our simple caching.

To see an even better example, look at the addUserToOrganization method:

    async addUserToOrganization({
      organizationName,
      memberUsername,
      role,
      addingUser,
    }) {
      const [organization, newMemberUser, addingMembership] = await Promise.all([
        this.getOrganization({ organizationName }),
        this.getUser({ username: memberUsername }),
        this.getMembership({ organizationName, username: addingUser }),
      ]);
      …
    }

At the beginning of this method, we have to make three other reads -- one for the Organization, one for the User being added to the Organization, and one for the Membership record of the user creating the new Membership. Because we've added caching to each of those methods, we should see lower latency on this endpoint.

This is what's great about our simple caching. It's pretty easy to reason about our cache setup as we're only handling individual objects. However, it's making almost all of our endpoints faster as many of them rely on these individual objects.

In this step, we implemented simple read-aside caching in our application. However, there's still a big problem with our caching setup. Even though we're only caching our objects for 60 seconds, there's still a chance that the underlying data has changed in the interim. Further, our cache hit rate is likely low as the initial read is always retrieved from the primary datastore.

In the next step, we'll look at cache invalidation and refreshing cached data on the write side.
