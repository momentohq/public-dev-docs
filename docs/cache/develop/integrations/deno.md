---
sidebar_position: 10
sidebar_label: Deno
title: Integrating Momento Cache with Deno
description: Learn to deploy a Deno project that uses Momento Cache
---

[Deno](https://deno.land/) is a JavaScript, TypeScript, and WebAssembly runtime with secure defaults and [Deno Deploy](https://deno.com/deploy) is their corresponding serverless edge worker platform.

In this tutorial, we'll walk through two [examples](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno) from our [JavaScript Web SDK](https://github.com/momentohq/client-sdk-javascript). By the end of the exercise, you'll have a Deno project that interacts with Momento Cache through the Web SDK or the HTTP API to get, set, and delete some data.

### Momento Web SDK vs HTTP API

There are a few reasons why you might choose one over the other when interacting with Momento Cache within Deno.

- The HTTP API is lightweight in that you won't need any additional dependencies beyond what Deno requires and you can use the standard `fetch` HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as `get`, `set`, and `delete`, and is currently only available if you use AWS as your cloud provider.

- The Web SDK is heavier-weight; you need to add a dependency on the SDK. However, it supports the full Momento API (including collections like Dictionaries and SortedSets, plus the ability to publish to Momento Topics). It also has a complete TypeScript/JavaScript API that makes it simpler to write code to interact with Momento. This can save you time and effort when developing your Worker.

- Additionally, Deno Deploy does not yet support [npm specifiers](https://deno.land/manual@v1.36.1/node/npm_specifiers) which is how our example pulls in the Web SDK and its dependencies. For now, only our HTTP API example can be published using Deno Deploy.

## Prerequisites

To get this app deployed and running, you'll need to have the following:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A [Deno Deploy](https://deno.com/deploy) account.
- A copy or fork of the [Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) in your personal repositories.

### Momento Setup

Once you have a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](/img/console-create-cache.png)

Create a cache called `worker` using AWS. Currently, the Momento HTTP API is supported only by AWS, but you can create the cache in any of the supported AWS regions.

![Create cache form](/img/console-create-worker-cache-form.png)

After pressing the `Create` button you'll see the new `worker` cache in the list of available caches.

![New cache](/img/console-caches-worker.png)

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento Api Key in the next step. 

Navigate to the [tokens](https://console.gomomento.com/tokens) page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations, such as creating or deleting a cache. This is especially helpful if you want to manage the security of control plane and data plane operations separately.

Choose the `Fine-Grained Access Token` token type, select `worker` as `Cache Name` from the drop down, and `readwrite` as `Role Type`. The `Super User Token` is used for managing control plane operations. More information about Momento authentication can be found [here](./../authentication/index.mdx). Hit the `Generate Api Key` button.

![Generate token](/img/fgac-worker-auth.png)

Copy the `Api Key` and `HTTP Endpoint` and save it in a safe place. You'll need to use it later to configure your Deno Deploy deployment.

![Generated token](/img/http-endpoint-auth-token.png)

### Deno and Deno Deploy Setup

Once you have created your [Deno Deploy](https://deno.com/deploy) account, you're ready to configure the Deno side of things.

First, you'll want to create a personal access token in [the Deno console](https://dash.deno.com/account#access-tokens). Make sure to save this token in a safe place.

Second, you'll want to navigate to the ["Projects" page](https://dash.deno.com/projects), click on "New Project", then click on the link that says "get started with an empty project using deployctl". The project name should be a couple of strings and a number, such as "lucky-spider-92".

Third, [install deno](https://deno.land/manual@v1.36.1/getting_started/installation) using your preferred method.

Fourth, install [`deployctl`](https://deno.com/deploy/docs/deployctl) for deploying your Deno project from the command line.

```
deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

You may also need to add `deployctl` to your PATH:

```
export PATH="/Users/<your-username>/.deno/bin:$PATH"
```

## Using the Momento HTTP API

First navigate to the deno HTTP API example directory:

```
cd client-sdk-javascript/examples/deno/http-api
```

Create a `.env` file and provide the name of your Momento Cache, the corresponding fine-grained access token, and the HTTP endpoint associated with your token. 

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
MOMENTO_HTTP_ENDPOINT="<your-http-endpoint>"
```

Run the program locally then checkout http://localhost:8000 in your browser to make sure it's working:

```
deno task start
```

The [example code](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/http-api/index.ts) sets an item in the cache, gets it, deletes it, and returns an HTML response. 
It uses the [`MomentoFetcher` class](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/deno/http-api/index.ts#L10) which provides a small wrapper that adds some error handling to the basic fetch calls to the Momento HTTP API.
   
```typescript
  const momento = new MomentoFetcher(apiKey, endpoint)

  await momento.set(cacheName, key, value, 10)
  console.log(`Set the key-value pair in the cache ${cacheName}`)

  const getRespAfterSet = await momento.get(cacheName, key)
  console.log(`Fetching the key after setting the value: ${getRespAfterSet}`)

  await momento.delete(cacheName, key)
  console.log(`Deleted the key-value pair from the cache ${cacheName}`)

  return new Response(
    `Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`,
    {
      status: 200,
      headers: new Headers({
        'Content-Type': 'text/html; charset=utf-8',
      }),
    },
  )
```

When you're ready to deploy, provide your project name and Deno Deploy access token and use the following command:

```
deployctl deploy --project="<your-project-name>" --token="<your-deno-token>" index.ts
```

This command will upload all files from your curent directory, including the `.env` file. If you prefer, you can set [environment variables](https://deno.com/deploy/docs/environment-variables) using the Deno Deploy console instead. More information about using the `deployctl` command can be found [here](https://deno.com/deploy/docs/deployctl).

Your deployed project will be published to a URL that begins with your project name, such as [https://lucky-spider-92.deno.dev/](https://lucky-spider-92.deno.dev/). This URL can be easily shared with others to show what you've built!

## Using the Momento Web SDK

First navigate to the deno Web SDK example directory:

```
cd client-sdk-javascript/examples/deno/web-sdk
```

Create a `.env` file and provide the name of your Momento Cache and a corresponding fine-grained access token.

```
MOMENTO_API_KEY="<your-api-key>"
MOMENTO_CACHE_NAME="<your-cache-name>"
```

Run the program locally then checkout http://localhost:8000 in your browser to make sure it's working:

```
deno task start
```

The [example code](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno/web-sdk/index.ts) instantiates a Momento CacheClient, sets an item in the cache, gets it, deletes it, and returns a basic response. 

```typescript
  const momento = new CacheClient({
    configuration: Configurations.Browser.v1(),
    credentialProvider: CredentialProvider.fromString({
      apiKey: env['MOMENTO_API_TOKEN'],
    }),
    defaultTtlSeconds: 60,
  })

  const cacheName = env['MOMENTO_CACHE_NAME']

  console.log('Storing key=foo, value=FOO')
  const setResponse = await momento.set(cacheName, 'foo', 'FOO')
  const getResponse = await momento.get(cacheName, 'foo')
  const deleteResponse = await momento.delete(cacheName, 'foo')

  return new Response(getResponse.body, {
    status: getResponse.status,
    headers: {
      'content-type': 'application/json',
    },
  })
```

When you're ready to deploy, you can follow one of Deno's [deployment guides](https://deno.land/manual@v1.36.1/advanced/deploying_deno). Deno Deploy does not yet support npm specifiers so this example can't be deployed there. 

## Conclusion

We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Deno and Deno Deploy. Feel free to dive further into the [example code](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/deno). We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running.
