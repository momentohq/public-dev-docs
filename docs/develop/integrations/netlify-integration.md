---
sidebar_position: 6
sidebar_label: Netlify
title: Integrate Momento With Netlify
description: Learn to deploy a chat app using Momento Javascript Web SDK to Netlify.
---

# Integrating Momento with your Netlify app

[Netlify](https://www.netlify.com/) is a popular platform for building, deploying, and scaling modern websites and apps. Their offerings include an advanced global CDN, Git-integrated CI/CD, and free automatic HTTPS support. Their deployment process integrates directly with your Git repositories, making initial deployment about as simple as choosing a repository. Once deployed, updating your sites and apps is handled automatically as you push your changes to Git. 

In this tutorial, we'll make use of a simple example [Next.js chat application](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) from our [Javascript SDK](https://github.com/momentohq/client-sdk-javascript). By the end of the exercise, you'll have a realtime browser-based chat application up and running at a URL you can use to invite your friends to the chat.

## Prerequisites

To get this app deployed and running, you'll need to have the following available:

- An account with a Git provider such as [GitHub](https://github.com/), [GitLab](https://gitlab.com), or [Bitbucket](https://bitbucket.org/).
- A [Netlify](https://www.netlify.com/) account.
- A copy or fork of the [Momento Javascript SDK](https://github.com/momentohq/client-sdk-javascript) in your personal repositories.

Once you have a Netlify account and a copy or fork of the Momento Javascript SDK in your Git provider account, you're ready to configure the Momento side of things using the [Momento console](https://console.gomomento.com). You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the `Create Cache` button on the top right of the page:

![Create Cache button](/img/console-create-cache.png)

Create a cache called `chat`. You can create the cache in your choice of cloud provider, AWS or GCP, and in any region. 

![Create cache form](/img/console-create-cache-form.png)

After pressing the `Create` button you'll see the new `chat` cache in the list of available caches.

![Chat cache](/img/console-caches-chat.png)

Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento authentication token in the next step. Navigate to the [tokens](https://console.gomomento.com/tokens) page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations such as delete. This is especially helpful if you want to manage the security of control plane and data plane operations separately.

Choose the `Fine-Grained Access Token` token type, select `chat` as `Cache Name` from the drop down, and `readwrite` as `Role Type`. The `Super User Token` is used for managing control plane operations. More information about Momento authentication can be found [here](https://docs.momentohq.com/develop/basics/working-with-momento-auth-tokens). Hit the `Generate Token` button.

![Generate token](/img/fgac-chat-auth.png)

Copy the `Auth Token` and save it in a safe place. You'll need to use it later to configure your Netlify deployment, where you will add it as an environment variable for use in the chat app. 

![Generated token](/img/console-generate-token-result.png)

## Deploying with Netlify

Now it's time to log into Netlify to configure and deploy the application. As noted before, you need a copy of the Momento Javascript SDK available in your repository. In this example, we'll deploy from a GitHub repository forked from [the original](https://github.com/momentohq/client-sdk-javascript).

![Fork SDK Repository](/img/github-fork-js-sdk.png)

After logging into Netlify, navigate to your team's `Sites` page and select `Add New Site` -> `Import an Existing Project`.

![Netlify Add Site Button](/img/netlify-add-site.png)

Then choose your Git provider to display a list of your repositories.

![Netlify Git providers](/img/netlify-git-providers.png)

From the list of repositories available to you, select `client-sdk-javascript`. 

![Netlify repository list](/img/netlify-repo-list.png)

The next screen allows you to configure your deployment. You'll be deploying from the `main` branch. Because we are deploying an example application from a subdirectory of the Momento Javascript SDK, you'll need to set the `Base directory` in the `Build settings` section of the page. The path to the chat example is `/examples/web/nextjs-chat`, so you'll enter that as the `Base directory`.

Assuming you've entered the base directory correctly, you should see some magic happen. Netlify has examined the contents of the base directory and detected that our project is using Next.js. That allows it to fill out the rest of the build settings form for us. The values it has chosen look good, so you can move on to the final step of configuration: environment variables.

![Netlify build settings](/img/netlify-build-settings.png)

Recall that we generated and saved a Momento auth token earlier for use with this application. Use the `Add environment variables` button below the build settings to add an environment variable with `MOMENTO_AUTH_TOKEN` as the key and the token you generated as the value. Next, add a second environment variable with `NEXT_PUBLIC_MOMENTO_CACHE_NAME` as the key and `chat` as the value to point your app to the cache you created earlier. And that's all there is to do to configure the deployment. Press the `Deploy client-sdk-javascript` button to deploy the app into the wild!

During the deployment, Netlify displays a detailed log showing what it's doing to build and publish your site and, if necessary, reporting on deployment failures to assist in troubleshooting. If all went as planned, you'll be directed to a page summarizing the deployment.

![Netlify site published](/img/netlify-published-site.png)

You're now ready to chat with your friends! Navigate to the `Site overview` in the left nav to find the URL that was generated for your site. You would, of course, set up a custom domain were this a production app, but the generated netlify.app URL is good enough for our purposes. 

![Netlify site overview](/img/netlify-site-overview.png)

Clicking on the `https://charming-salmiakki-e07713.netlify.app/` link in the overview (your URL will, of course, be different) reveals your chat app's lobby screen. Use `chat` as the name of the chat room. You could use any name, but using `chat` makes it easy to remember and share. If it doesn't exist, the chat room will be created.

![Chat app lobby](/img/nextjs-chat-app-lobby.png)

The final step is to choose a username for the chat. 

![Chat app username](/img/nextjs-chat-app-username.png)

Now all that's left is to share the URL, cache, and room name with the people you'd like to invite to your chat!

![Chat app chat](/img/nextjs-chat-app-chat.png)

## Conclusion

We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Netlify. Feel free, of course, to dive into the [code for this chat example](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat) as well. We hope you'll also enjoy the simplicity of the Momento Topics feature that powers the chat, especially when compared to alternative approaches such as polling and web sockets. And we especially look forward to seeing what our customers build and deploy with Momento in the future!
