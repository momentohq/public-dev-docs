---
sidebar_position: 6
sidebar_label: Sequelize
title: Integrate Momento With Sequelize ORM
description: Supercharge your sequelize backed databases with Momento cache
---

# Integrating Momento with your Sequelize backed database

[Sequelize](https://sequelize.org/) is a popular ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.

In this tutorial, we'll make use of a simple [example](https://github.com/momentohq/momento-sequelize-cache/tree/main/examples) from our [Momento sequelize model cache wrapper](https://github.com/momentohq/momento-sequelize-cache). By the end of the exercise, you'll be able to seamlessly cache your sequelize-backed ORM databases with minimal code changes.

## Prerequisites

To get this example running, you'll need to have the following available:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A copy or fork of the [Momento Sequelize Wrapper](https://github.com/momentohq/momento-sequelize-cache) in your personal repositories.

Once you have a fork of the Momento wrapper in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](/img/console-create-cache.png)

Create a cache called `model-cache`. You can create the cache in your choice of cloud provider, AWS or GCP, and in any region.

![Create cache form](/img/console-create-cache-model-cache.png)

After pressing the `Create` button you'll see the new `model-cache` cache in the list of available caches.

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the [tokens](https://console.gomomento.com/tokens) page, choose the cloud provider and region you used to create your cache, choose the `Super User Token` token type, and hit the `Generate Token` button.

![Generate token](/img/console-generate-token-form.png)

Copy the `Auth Token` and save it in a safe place. You'll need to use it later to run your example, where you will add it as an environment variable.

![Generated token](/img/console-generate-token-result.png)

## Running the example

To run the example, navigate to `examples` directory in the repository and run,

```bash
npm install
MOMENTO_API_KEY="<your-api-key>" npm run basic
```

## Behind the scenes

Creating a Momento wrapper over your Sequelize backed database simply involves creating a Momento client and passing it to a factory method:

```typescript
import { Configurations, CredentialProvider } from "@gomomento/sdk";
import { modelCacheFactory, MomentoClientGenerator} from "@gomomento-poc/momento-sequelize-cache";

const momentoClient = MomentoClientGenerator.getInstance({
        configuration: Configurations.Laptop.latest(),
        credentialProvider: CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_API_KEY'}),
        defaultTtlSeconds: 60,    
});

const modelCache = await modelCacheFactory(momentoClient);
```

The `modelCache` object provides a `wrap` method that you can use to wrap any existing Sequelize model. From that point, the wrapped object provides the same familiar APIs that your Sequelize model object would. For example, to fetch a User (from a `User` model) by the primary key, the call looks like:

```typescript
await modelCache.wrap(User).findByPk(1);
```

This call orchestrates the read-aside caching lifecycle: prioritizing cache retrieval, resorting to the Sequelize database on cache misses, and subsequently updating the cache for future requests. You can quickly get started by running one of our examples with various queries.

## Conclusion

A read-aside cache can significantly improve the performance of applications. It not only accelerates data retrieval but also lightens the load on primary data stores, resulting in benefits for both developers and end-users. With Momento enhancing your Sequelize applications, you're set to experience a harmonious blend of speed and efficiency.
