---
sidebar_position: 7
sidebar_label: Vercel
title: Integrating Momento with your Vercel app
description: Learn to deploy a chat app using Momento Javascript Web SDK to Vercel.
---

[Vercel](https://vercel.com/) is a popular platform for building, deploying, and scaling modern websites and apps. Vercel are also the creators and maintainers of [Next.js](https://nextjs.org/). Their platform's offerings include a fast global edge network, the scalability of serverless, and deployments seamlessly integrated with the most popular Git providers: [GitHub](https://github.com/), [GitLab](https://gitlab.com), and [Bitbucket](https://bitbucket.org/). 

In this tutorial, we'll make use of a simple example [Next.js chat application](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) from our [Javascript SDK](https://github.com/momentohq/client-sdk-javascript). By the end of the exercise, you'll have a realtime browser-based chat application up and running at a URL you can use to invite your friends to the chat.

## Prerequisites

To get this app deployed and running, you'll need to have the following available:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A [Vercel](https://vercel.com/) account.
- A copy or fork of the [Momento Javascript SDK](https://github.com/momentohq/client-sdk-javascript) in your personal repositories.

Once you have a Vercel account and a copy or fork of the Momento Javascript SDK in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](/img/console-create-cache.png)

Create a cache called `chat`. You can create the cache in your choice of cloud provider, AWS or GCP, and in any region.

![Create cache form](/img/console-create-cache-form.png)

After pressing the `Create` button you'll see the new `chat` cache in the list of available caches.

![Chat cache](/img/console-caches-chat.png)

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the [tokens](https://console.gomomento.com/tokens) page, choose the cloud provider and region you used to create your cache, choose the `Super User Token` token type, and hit the `Generate Token` button.

![Generate token](/img/console-generate-api-key.png)

Copy the `Auth Token` and save it in a safe place. You'll need to use it later to configure your Vercel deployment, where you will add it as an environment variable for use in the chat app.

![Generated token](/img/console-api-key-result.png)

## Deploying with Vercel

Now it's time to log into Vercel to configure and deploy the application. As noted before, you need a copy of the Momento Javascript SDK available in your repository. In this example, we'll deploy from a GitHub repository forked from [the original](https://github.com/momentohq/client-sdk-javascript).

![Fork SDK Repository](/img/github-fork-js-sdk.png)

After logging into Vercel, navigate to your `Overview` page and press the `Create a New Project` button.

![Vercel overview page](/img/vercel-overview.png)

From the list of repositories available to you, press the `Import` button for `client-sdk-javascript`.

![Vercel import repository](/img/vercel-import-repository.png)

The next screen allows you to configure your deployment. Because we are deploying an example application from a subdirectory of the Momento Javascript SDK, you'll need to set the `Root Directory` in the `Configure Project` section of the page. The path to the chat example is `/examples/web/nextjs-chat`, so you'll enter that as the `Root Directory`, using the `Edit` button to navigate to `examples` -> `web` -> `nextjs-chat`.

![Vercel root directory](/img/vercel-root-directory.png)

Notice the Next.js icon next to the selected directory. Vercel has examined the contents of the directory and detected that our project is using Next.js. Because of this auto-detection, we can simply leave the `Build and Output Settings` section alone. It will select default values appropriate to our project. 

Recall that we generated and saved a Momento auth token earlier for use with this application. Use the `Environment Variables` section below the build settings to add an environment variable with `MOMENTO_API_KEY` as the name and the token you generated as the value. Next, add a second environment variable with `NEXT_PUBLIC_MOMENTO_CACHE_NAME` as the key and `chat` as the value to point your app to the cache you created earlier.

![Vercel environment variables](/img/vercel-environment-variables.png)

And that's all there is to do to configure the deployment. Press the `Deploy` button to release your app into the wild!

During the deployment, Vercel displays a detailed log showing what it's doing to build and publish your site and, if necessary, reporting on deployment failures to assist in troubleshooting. If all went as planned, you'll be directed to a page confirming a successful deployment.

![Vercel deployment confirmation](/img/vercel-deployment-confirmation.png)

Use the `Continue to Dashboard` button to view detailed information about your deployment, most importantly being the URL.

![Vercel production deployment](/img/vercel-production-deployment.png)

You're now ready to chat with your friends! There are a few URLs to choose from listed here, but you'll want to use the simplest one listed in the `Domains` section. You would, of course, set up a custom domain were this a production app, but the generated vercel.app URL is good enough for our purposes.

Clicking on the `client-sdk-javascript.vercel.app` link (your URL will likely be different) reveals your chat app's lobby screen. Use `chat` as the name of the chat room. You could use any name, but using `chat` makes it easy to remember and share. If it doesn't exist, the chat room will be created.

![Chat app lobby](/img/nextjs-chat-app-lobby.png)

The final step is to choose a username for the chat.

![Chat app username](/img/nextjs-chat-app-username.png)

Now all that's left is to share the URL, cache, and room name with the people you'd like to invite to your chat!

![Chat app chat](/img/nextjs-chat-app-chat.png)

## Conclusion

We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Vercel. Feel free, of course, to dive into the [code for this chat example](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) as well. We hope you'll also enjoy the simplicity of the Momento Topics feature that powers the chat, especially when compared to alternative approaches such as polling and web sockets. And we especially look forward to seeing what our customers build and deploy with Momento in the future!
