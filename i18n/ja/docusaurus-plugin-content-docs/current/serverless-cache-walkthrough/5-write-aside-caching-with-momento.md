---
sidebar_position: 5
sidebar_label: Momento でWrite-aside キャッシュ
title: Momento でWrite-aside キャッシュ
---

# Write-aside caching with Momento

In the previous step, we added our initial caching implementation by adding read-aside caching to our application. As part of that, we learned about different caching strategies and the factors to consider in choosing a cache strategy.

In this step, we'll evolve our caching strategy a bit. We'll add write-aside caching to our current read-aside implementation to ensure our cached data stays fresh. In doing so, we'll discuss some practical and conceptual tips for ensuring data freshness in your cache.

If you want to skip the concepts and go directly to the code, navigate ahead to the [implementation section](#implementing-a-write-aside-caching-strategy).

## Key concepts on cache freshness

One of the most cited quotes in programming is "There are only two hard things in computer science -- cache invalidation and naming things."

Naming things is outside of the scope of this tutorial (and seems to be truly unsolvable). However, the intricacies of cache invalidation are right on point and are worth discussing further.

What makes cache invalidation one of the hardest problems in computer science? There are two main factors at play here.

First, a cache is only a copy of some true data. The actual data is stored in some primary data store, likely one that has durability, transactionality, and other functionality that a cache doesn't support. The cache is optimized for fast reads and removes unnecessary features in support of this goal.

The problem here is that you now have two sources of data -- the primary and the cached -- and something is responsible for keeping them in sync. This requires a deep understanding of your application requirements and a tight integration between your read and write paths to ensure a satisfactory outcome to your end users.

The second problem is in the tradeoff between cache availability and cache hit rate. Caches use memory to store data for quick retrieval, and RAM is more expensive than disk. Rather than store your entire data set in your cache, you want to only store data that is likely to be accessed again in the near future.

This tradeoff is even more important in the world of static, instance-based caches. You need to pre-provision your cache size ahead of time, and you'll pay for that cache size being available regardless of whether you use it or not. Further, if your cache runs out of room, you'll need to rely on an eviction mechanism to eject entries from your cache. If you're not careful about cache management and eviction, this can make a problem go from bad to worse as you get a spike in evictions and increased load on your primary data sources.

With Momento, this problem is diminished. Momento is a dynamic cache that doesn't require pre-provisioning a specific cache size. You only need to specify the TTL value for a particular cache entry, and Momento will ensure it is available until the expiry.

This greatly reduces the number of factors you need to consider in caching. You don't need to monitor overall memory usage and balance an unused, over-provisioned cache during downtimes against your peak usage. Rather, you only need to balance your cache hit rate against your overall spend. This makes it much easier to tune your TTL in a way that makes sense to you and your users.

Now that we know about cache freshness and the difficulties of cache invalidation, let's go ahead and update our application code to use a write-aside strategy as well.

## Implementing a write-aside caching strategy

Let's go back and implement write-aside caching in our serverless application. To do this, we will proactively store an entry in our cache whenever we write the underlying data. This pattern will be in addition to our existing read-aside strategy, and we'll update our read-aside implementation in light of these changes.

In implementing caching, it's good to do an audit of all the different places your data can change to ensure you're not caching stale data. This is particularly true when you have multiple places manipulating and displaying the same piece of data. You should also be careful when caching data that is out of your control, such as that which belongs to another service.

The caching requirements are pretty straightforward in our application. We are only caching data that belongs to our service. Additionally, there are only a few paths to update the data, and they all flow through the AccountService class that we created.

Let's start by adding write-aside caching for our User object.

Open the `src/accounts/service.js` file and find the `createUser` method on your AccountService class definition. Update it so it looks as follows:

    async createUser({ username, firstName, lastName }) {
      const user = new User({ username, firstName, lastName });
      try {
        await this._dynamoDBClient
          .putItem({
            TableName: TABLE_NAME,
            Item: user.toItem(),
            ConditionExpression: "attribute_not_exists(PK)",
          })
          .promise();

        await this._cacheClient.set(
          CACHE_NAME,
          getUserCacheKey(user),
          JSON.stringify(user.toItem()),
          1800
        );

        return user;
      } catch (error) {
        if (error.code === "ConditionalCheckFailedException") {
          throw new UserAlreadyExistsError(username);
        }
        throw error;
      }
    }

Notice that the only change we're making to our existing function is caching our User item after it was successfully stored in DynamoDB. Other than that, the code runs exactly as before.

There are two other notes we should discuss as we update our code.

First, notice that we're using a `getUserCacheKey` function to generate the cache key when storing our User item. This is because we're now using this cache key in two places -- once in the `createUser` method and once in the `getUser` method. We want to ensure these two methods are using the same value, so we'll centralize that in a function that both methods can call.

Add the following `getUserCacheKey` function to the bottom of your `src/accounts/service.js` file so it can be used by both methods:

    const getUserCacheKey = (user) => {
      return `USER#${user.username}`;
    };

The second thing to notice about our update is that we're using a much longer TTL value when storing our User item. Rather than storing our item for 60 seconds, we're storing it for 1800 seconds (30 minutes).

Because we are now using write-aside caching as well, we can be more aggressive in caching our data for longer periods of time. We don't have to worry about our cached data becoming stale as we will update the cached item whenever it changes.

And because Momento is a dynamic, elastic cache that does not require pre-provisioning a set amount of memory, we don't need to think about managing our cache size to prevent eviction by algorithm. The only thing we need to focus on is how long we should keep our data around. This makes it easier to balance fewer concerns -- our cache hit rate vs. our bill -- rather than a larger variety of considerations.

Let's make corresponding changes to our getUser method above. Update the getUser method so it looks as follows:

    async getUser({ username }) {
      const user = new User({ username });

      let getResp = await this.cacheClient.get(CACHE_NAME, getUserCacheKey(user));
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
        process.env.CACHE_NAME,
        userCacheKey,
        JSON.stringify(response.Item),
        1800
      );

      return response.Item ? itemToUser(response.Item) : null;
    }

The changes here are pretty minimal. First, we removed the template literal to generate the user cache key and instead used the `getUserCacheKey` function that is used by the `createUser` method. Then, we changed the TTL from 60 to 1800 when storing a User item in the cache.

Notice how well the combination of a write-aside and read-aside cache work together. By using a read-aside strategy, we can improve the latency of frequently accessed items. By adding a write-aside strategy, we can cache these items for longer without worrying about data consistency issues. And by using Momento for our implementation, we don't need to worry about running out of room in our cache.

You can make similar changes to the other methods in the AccountService to implement write-aside caching. As noted above, having stale Membership data could be particularly disruptive to our application users. They might not be able to access something they should have access to or, even worse, might be allowed to access something they shouldn't have access to. By adding write-aside caching, we can prevent these undesirable scenarios.

## Summary

That concludes this tutorial on adding a cache to your serverless application. You can remove your application by running the following command in your terminal:

    serverless remove

In this tutorial, we learned some practical steps for integrating Momento into your application as well as some conceptual material about caching strategies, the Lambda execution model, and implementation considerations.

If you are looking for practical tips on using Momento with AWS Lambda, be sure to look at our reference guide for [adding caching to AWS Lambda functions](./../develop/guides/caching-with-aws-lambda).

If you want a broader overview of concepts discussed in this tutorial, check out our pages on [Momento concepts](./../learn/how-it-works/) and [caching strategies](./../introduction/common-caching-strategies).

If you're looking to get started with Momento, check out our [quickstart tutorial](./../getting-started) to get your credentials and cache your first item in less than 5 minutes.
