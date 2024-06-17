---
sidebar_position: 8
sidebar_label: Cloudflare
title: Integrating Momento with your Cloudflare worker
description: Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK
---

[Cloudflare Workers](https://workers.cloudflare.com/) is a popular platform for deploying and running serverless code.

In this tutorial, we'll make use of two [examples](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers) from our [JavaScript SDK](https://github.com/momentohq/client-sdk-javascript). By the end of the exercise, you'll have a Cloudflare worker that interacts with Momento Cache to populate and retrieve data.

## Prerequisites

To get this app deployed and running, you'll need to have the following available:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A [Cloudflare](https://workers.cloudflare.com/) account.
- A copy or fork of the [Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) in your personal repositories.

Once you have a Cloudflare account and a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](/img/console-create-cache.png)

Create a cache called `worker`. You can create the cache in your choice of cloud provider, AWS or GCP, and in any region.

![Create cache form](/img/console-create-worker-cache-form.png)

After pressing the `Create` button you'll see the new `worker` cache in the list of available caches.

![Chat cache](/img/console-caches-worker.png)

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento authentication token in the next step. Navigate to the [tokens](https://console.gomomento.com/tokens) page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations such as delete. This is especially helpful if you want to manage the security of control plane and data plane operations separately.

Choose the `Fine-Grained Access Token` token type, select `worker` as `Cache Name` from the drop down, and `readwrite` as `Role Type`. The `Super User Token` is used for managing control plane operations. More information about Momento authentication can be found [here](/cache/develop/authentication/index.mdx). Hit the `Generate API Key` button.

![Generate token](/img/fgac-worker-auth.png)

Copy the `API Key` and `HTTP Endpoint` and save it in a safe place. You'll need to use it later to configure your Worker deployment, where you will add it as an environment variable for use in the worker.

![Generated token](/img/http-endpoint-auth-token.png)

## Deploying with Cloudflare

Now it's time to configure and deploy the application to your Cloudflare account. As noted before, you need a copy of the Momento JavaScript SDK available in your repository. 
In this example, we'll deploy from a GitHub repository forked from [the original](https://github.com/momentohq/client-sdk-javascript).

![Fork SDK Repository](/img/github-fork-js-sdk.png)

This repository contains a directory under `examples` for `cloudflare-workers`. It further contains subdirectories for two types of example projects to use Momento inside a Cloudflare worker:

- [HTTP-API](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/http-api) - How to interact with Momento cache using its HTTP API on Cloudflare workers.
- [Web-SDK](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/web-sdk) - How to interact with Momento cache using its Web SDK on Cloudflare workers.

There are a few reasons why you might choose one over the other when interacting with Momento within a Cloudflare Worker.
- The HTTP APIs is lighter-weight; you don't need to add any dependencies, you can just use the standard `fetch` HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as `get`, `set`, and `delete`.

- The Web SDK is heavier-weight; you need to add a dependency on the SDK. However, it supports the full Momento API (including collections like Dictionaries and SortedSets, plus the ability to publish to Momento Topics). It also has a complete TypeScript/JavaScript API that makes it simpler to write code to interact with Momento. This can save you time and effort when developing your Worker.


Cloudflare uses a file called wrangler.toml to configure the development and publishing of a worker. More information about Cloudflare configuration can be found [on their website](https://developers.cloudflare.com/workers/wrangler/configuration/).

### Using the Momento HTTP API

First let's navigate to the relevant example directory to use Momento's HTTP API in a Cloudflare worker.

```bash
cd examples/cloudflare-workers/http-api
```

Update the `wrangler.toml` file in this directory with the cache name `worker` and the HTTP endpoint we copied before as they appeared in the Momento console.

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_REST_ENDPOINT = "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"
MOMENTO_CACHE_NAME = "worker"
```

Update the `.dev.vars` file in the example directory with the Momento API Key. Since this is a secret token, we don’t store it as an environment variable, instead storing it as a Cloudflare secret.

```.vars
MOMENTO_API_KEY="<your token here>"
```

Start the development server:

```bash
npm run start
```

Open your browser to [localhost:8787](http://localhost:8787). The code in this example sets an item in the cache, gets it, and returns it as a JSON object:
   
```typescript
    // setting a value into cache
    const setResp = await client.set(cache, key, value);
    console.log("setResp", setResp);

    // getting a value from cache
    const getResp = await client.get(cache, key)
    console.log("getResp", getResp);

    return new Response(JSON.stringify({ response: getResp }));
```
A deployed example can be found [here](https://momento-cloudflare-worker-http.pratik-37c.workers.dev).

If you would like to deploy this example to your own Cloudflare worker, make sure you add the `MOMENTO_API_KEY` as a secret inside of your Cloudflare account:

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

Then you can run `npm run deploy`. You will be prompted for a Cloudflare login before deploying to your Cloudflare account.

```bash
> shy-bush-898e@0.0.0 deploy
> wrangler deploy

 ⛅️ wrangler 3.2.0 (update available 3.5.0)
-----------------------------------------------------
Your worker has access to the following bindings:
- Vars:
  - MOMENTO_REST_ENDPOINT: "https://api.cache.cell-4-us-west-2-1...."
  - MOMENTO_CACHE_NAME: "worker"
Total Upload: 2.04 KiB / gzip: 0.69 KiB
Uploaded momento-cloudflare-worker-http (1.44 sec)
Published momento-cloudflare-worker-http (0.40 sec)
  https://momento-cloudflare-worker-http.pratik-37c.workers.dev
```

### Using the Momento Web SDK


First let's navigate to the relevant example directory to use Momento's Web SDK in a Cloudflare worker.

```bash
cd examples/cloudflare-workers/web-sdk
```

Update the `wrangler.toml` file in this directory with the cache name `worker`. Note that we do not need the `HTTP endpoint` anymore as the Web SDK manages that for us. 

```toml
name = "momento-cloudflare-worker-http"
main = "src/worker.ts"
compatibility_date = "2023-07-10"

[vars]
MOMENTO_CACHE_NAME = "worker"
```

Update the `.dev.vars` file in the example directory with the Momento API Key. Since this is a secret token, we don’t store it as an environment variable, instead storing it as a Cloudflare secret.

```.vars
MOMENTO_API_KEY="<your token here>"
```

Start the development server:

```bash
npm run start
```

Open your browser to [localhost:8787](http://localhost:8787). The code in this example sets an item in the cache, gets it, and returns it as a JSON object:

```typescript
    // setting a value into cache
    await client.set(cache, key, value);

    // getting a value from cache
    const getResponse = await client.get(cache, key)

    return new Response(JSON.stringify({ response: getResponse.toString() }));
```

A deployed example can be found [here](https://momento-cloudflare-worker-web.pratik-37c.workers.dev/).

If you would like to deploy this example to your own Cloudflare worker, make sure you add the `MOMENTO_API_KEY` as a secret inside of your Cloudflare account:

```shell

npx wrangler secret put MOMENTO_API_KEY
> Enter a secret value: **************************
> 🌀 Creating the secret for the Worker "momento-cloudflare-worker-http"
> ✨ Success! Uploaded secret MOMENTO_API_KEY
```

Then you can run `npm run deploy`. You will be prompted for a Cloudflare login before deploying to your Cloudflare account.

```bash
> shy-bush-898e@0.0.0 deploy
> wrangler deploy

 ⛅️ wrangler 3.2.0 (update available 3.5.0)
-----------------------------------------------------
Your worker has access to the following bindings:
- Vars:
  - MOMENTO_CACHE_NAME: "worker"
Total Upload: 1673.43 KiB / gzip: 168.75 KiB
Uploaded momento-cloudflare-worker-web (2.46 sec)
Published momento-cloudflare-worker-web (0.30 sec)
  https://momento-cloudflare-worker-web.pratik-37c.workers.dev

```

## Conclusion

We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Cloudflare Workers. Feel free, of course, to dive into the [code for the examples](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers) as well. We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running.
