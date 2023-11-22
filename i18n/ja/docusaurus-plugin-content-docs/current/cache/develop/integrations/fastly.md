---
sidebar_position: 9
sidebar_label: Fastly
title: Integrating Momento Cache with Fastly Compute@Edge
description: Learn to deploy a Fastly Compute@Edge project that uses Momento Cache via HTTP API.
---

[Compute@Edge](https://www.fastly.com/products/edge-compute) is Fastly's platform for deploying and running serverless code.

In this tutorial, we'll walk through the [example](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/fastly-compute) from our [JavaScript SDK](https://github.com/momentohq/client-sdk-javascript). By the end of the exercise, you'll have a Fastly Compute@Edge project that interacts with Momento Cache via the HTTP API to get, set, and delete some data.

The HTTP API is lightweight in that you won't need any additional dependencies beyond what Fastly requires and you can use the standard `fetch` HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as `get`, `set`, and `delete`, and is currently only available if you use AWS as your cloud provider.

## Prerequisites

To get this app deployed and running, you'll need to have the following:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A [Fastly](https://www.fastly.com/) account.
- A copy or fork of the [Momento JavaScript SDK](https://github.com/momentohq/client-sdk-javascript) in your personal repositories.

### Momento Setup

Once you have a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](@site/static/img/console-create-cache.png)

Create a cache called `worker` using AWS. Currently, the Momento HTTP API is supported only by AWS, but you can create the cache in any of the supported AWS regions.

![Create cache form](@site/static/img/console-create-worker-cache-form.png)

After pressing the `Create` button you'll see the new `worker` cache in the list of available caches.

![New cache](@site/static/img/console-caches-worker.png)

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento API key in the next step. 

Navigate to the [API keys](https://console.gomomento.com/api_keys) page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained key that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations, such as creating or deleting a cache. This is especially helpful if you want to manage the security of control plane and data plane operations separately.

Choose the `Fine-Grained Access Key` key type, select `worker` as `Cache Name` from the drop down, and `readwrite` as `Role Type`. The `Super User Key` is used for managing control plane operations. More information about Momento authentication can be found [here](./../authentication/index.mdx). Hit the `Generate API Key` button.

![Generate API Key](@site/static/img/fgac-worker-auth.png)

Copy the `API Key` and `HTTP Endpoint` and save it in a safe place. You'll need to use it later to configure your Fastly Compute@Edge deployment.

![Generated token](@site/static/img/http-endpoint-auth-token.png)

### Fastly Setup

Once you have created your Fastly account, you're ready to configure the Fastly side of things using the [Fastly console](https://manage.fastly.com/services/all). Once you're logged in, click on your account name in the top right corner and select `Account`. Under the `Personal profile` section of the side bar, select `API tokens`. Click on the `Create Token` button in the top right and follow Fastly's instructions for creating a [user API token](https://docs.fastly.com/en/guides/using-api-tokens#creating-api-tokens). Make sure to save this API token in a safe place.

Next, you will install the [Fastly CLI](https://developer.fastly.com/learning/compute/#install-the-fastly-cli) and follow the command line prompts for providing the API token you just created:

```bash
brew install fastly/tap/fastly
fastly profile create
```

## Deploying with Fastly

Now it's time to configure and deploy the application to your Fastly account. As noted before, you need a copy of the Momento JavaScript SDK available in your repository. 
In this example, we'll deploy from a GitHub repository forked from [the original](https://github.com/momentohq/client-sdk-javascript).

![Fork SDK Repository](@site/static/img/github-fork-js-sdk.png)

This repository contains a directory under `examples` for `fastly-compute` which contains the example code for interacting with your Momento Cache using the Momento HTTP API. 

Fastly Compute@Edge uses a file called `fastly.toml` to configure the local and deployed execution environments for your edge code. More information about Compute@Edge configuration can be found [on their website](https://developer.fastly.com/reference/compute/fastly-toml/).

First let's navigate to the relevant example directory and install the dependencies:

```bash
cd client-sdk-javascript/examples/fastly-compute
npm install
```

Second, create a `secrets.json` file with the following contents:

```
{
    "MOMENTO_HTTP_ENDPOINT": "<YOUR-HTTP-ENDPOINT>",
    "MOMENTO_BACKEND": "<YOUR-MOMENTO-BACKEND-NAME>",
    "MOMENTO_CACHE": "<YOUR-CACHE-NAME>",
    "MOMENTO_API_KEY": "<YOUR-MOMENTO-API-KEY>"
}
```

You can set the variable `MOMENTO_BACKEND` to any string value. Make sure that your HTTP endpoint corresponds to the region where you created your Momento Cache. This is the HTTP endpoint value we copied from the `Generate API Key` output on the Momento Console.

**Note**: for production environments, the Momento API key should be saved in a [Fastly Secret Store](https://developer.fastly.com/reference/api/services/resources/secret-store/). However, this is a feature currently restricted to beta users, so this example saves the API key in a [Config Store](https://developer.fastly.com/reference/api/services/resources/config-store/) along with the other values specified in the `secrets.json` file.

Next, you'll want to make sure the contents of your `secrets.json` file match the contents in the `fastly.toml` file. 

Specifically, you'll want to make sure your HTTP endpoint and backend name is provided under the `[local_server]` heading. The local execution environment will use the information supplied under this heading to set up the appropriate backend and config store for your localhost server while you're developing.

```
[local_server]

  [local_server.backends]

    [local_server.backends.<YOUR-MOMENTO-BACKEND-NAME>]
      url = "https://<YOUR-HTTP-ENDPOINT>"

  [local_server.config_stores]

    [local_server.config_stores.secrets]
      file = "secrets.json"
      format = "json"
```

Finally, you'll want to make sure all four variables in the `secrets.json` file are copied over to the items under the `[setup]` heading. Fastly will use the information supplied under this heading to create and initialize the appropriate backend and config store resources in the execution environment. 

```
[setup]

  [setup.backends]

    [setup.backends.<YOUR-MOMENTO-BACKEND-NAME>]
      address = "<YOUR-HTTP-ENDPOINT>"
      port = 443

  [setup.config_stores]

    [setup.config_stores.secrets]

      [setup.config_stores.secrets.items]

        [setup.config_stores.secrets.items.MOMENTO_BACKEND]
          value = "<YOUR-MOMENTO-BACKEND-NAME>"

        [setup.config_stores.secrets.items.MOMENTO_CACHE]
          value = "<YOUR-CACHE-NAME>"

        [setup.config_stores.secrets.items.MOMENTO_HTTP_ENDPOINT]
          value = "<YOUR-HTTP-ENDPOINT>"

        [setup.config_stores.secrets.items.MOMENTO_TOKEN]
          value = ""<YOUR-MOMENTO-API-KEY>""
```

Next, start the development server and navigate to [localhost:7676](http://localhost:7676) to check that it's working.

```bash
fastly compute serve
```

The code in this example sets an item in the cache, gets it, deletes it, and returns an HTML response. 
It uses the [`MomentoFetcher` class](https://github.com/momentohq/client-sdk-javascript/blob/main/examples/fastly-compute/src/index.ts#L98) which provides a small wrapper that adds some error handling to the basic fetch calls to the Momento HTTP API.
   
```typescript
    const momento = new MomentoFetcher(authToken, httpEndpoint, backend);

    const getResp = await momento.get(cacheName, key);
    console.log(`Fetching the key when the cache is empty: ${getResp}`);

    await momento.set(cacheName, key, value, 10);
    console.log(`Set the key-value pair in the cache ${cacheName}`);

    const getRespAfterSet = await momento.get(cacheName, key);
    console.log(`Fetching the key after setting the value: ${getRespAfterSet}`);

    await momento.delete(cacheName, key);
    console.log(`Deleted the key-value pair from the cache ${cacheName}`);

    return new Response(`Tested the Momento cache using: <br /> Key: ${key} | Value: ${value}`, {
      status: 200,
      headers: new Headers({'Content-Type': 'text/html; charset=utf-8'}),
    });
```

What you should see is a simple text response that matches: 

![Fastly example response](@site/static/img/deployed-fastly-response.png)

When you're ready to run the project on Fastly, run this command to build and deploy:

```bash
fastly compute publish
```

If you want to see logs from your deployed service, you can enable log tailing from the same directory where the `fastly.toml` lives:

```bash
fastly log-tail
```

 More information about deploying to Fastly can be [found here](https://developer.fastly.com/learning/compute/#deploy-to-a-fastly-service). And more information about logging and monitoring your Fastly Compute@Edge project can be [found here](https://developer.fastly.com/learning/compute/testing/#live-log-monitoring-in-your-console).

## Conclusion

We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Fastly Compute@Edge. Feel free, of course, to dive into the [example code](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/fastly-compute) as well. We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running.
