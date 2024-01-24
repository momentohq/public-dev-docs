---
sidebar_position: 8
sidebar_label: Unity
title: Integrating Momento with your Unity app
description: Learn to deploy a chat app using Momento .NET SDK to Unity.
---

[Unity](https://unity.com/) is a real-time development platform that is one of the most popular game engines on the market today. The Unity game engine is used by thousands of developers to create 2D and 3D interactive apps, across a variety of platforms, including mobile, desktop, and immersive platforms (e.g., augmented and virtual reality).

In this tutorial, we'll build a [simple Unity chat application](https://github.com/momentohq/momento-unity-demo) using the [Momento .NET SDK](https://github.com/momentohq/client-sdk-dotnet). Specifically, we'll utilize [Momento Topics](https://docs.momentohq.com/topics) for publishing and subscribing to the chat messages. 

Momento Topics is a serverless approach to real-time communication that allows clients to subscribe and publish to dedicated channels called topics. This makes it perfect for a real-time Unity-based chat application. Furthermore, since it's a serverless approach, there's no need for you to worry about all the details of creating or configuring your own server. More details can be found on the [Momento Topics Documentation page](https://docs.momentohq.com/topics).

## Prerequisites

### Unity
Download the [Unity 2022 LTS release](https://unity.com/releases/lts). In writing this tutorial, we specifically used Unity 2022.3.9f1 but any Unity 2022 LTS release should work.

### Momento
While waiting for Unity to download and install, you can configure the Momento side of things using the [Momento console](https://console.gomomento.com). Note that this step may be unnecessary if you are already using a [Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) (see `MomentoTopicsDemo-TokenVendingMachine.unity` in [Example Scenes](#example-scenes) below for more information).

1. You can create an account in the console by providing your email address or linking an existing Google or GitHub account. 
2. Once you've logged into the console, click the `Create Cache` button on the top right of the page:
![Create Cache button](/img/console-create-cache.png)

3. Create a cache called `Unity-Topics-Cache`. You can create the cache in your choice of cloud provider, AWS or GCP, and in any region.

4. After pressing the `Create` button you'll see the new `Unity-Topics-Cache` cache in the list of available caches. Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step.
![Chat cache](/img/unity/Unity-Topics-Cache.png)

5. Navigate to the [tokens](https://console.gomomento.com/tokens) page, choose the cloud provider and region you used to create your cache, choose the `Super User Token` token type, and hit the `Generate API Key` button.
![Generate token](/img/console-generate-api-key.png)

6. Copy the `API Key` and save it in a safe place. You'll need to use it later to configure your Unity chat application.
![Generated token](/img/console-api-key-result.png)

## Setting up the Unity Project

### Creating the Project
After completing the [Prerequisites](#prerequisites), you'll need to set up the Unity project. To do so, you can either clone our [example demo repository](https://github.com/momentohq/momento-unity-demo) and start from there, or you can create your own from scratch. If you're new to Unity or want to save time in later steps, we recommend cloning the example repository. 

To use the Unity project in our example repository, complete the following steps:
1. Clone https://github.com/momentohq/momento-unity-demo.
2. Open Unity Hub.
3. Open the existing Unity project by clicking "Open":
![New Unity Project](/img/unity/hub-new-project.png)
4. Then choose the cloned folder.
5. If using a version other than Unity 2022.3.9f1, you may need to let Unity change the project's editor version appropriately.
6. Once the Unity project is loaded, open the `Scenes/MomentTopicsDemo.unity` scene file.

The rest of this tutorial will utilize our example repository.

### Adding the Momento .NET SDK to Unity
Once the project has finished being opened:
1. Download the latest [MomentoSdkUnity release .zip file](https://github.com/momentohq/client-sdk-dotnet/releases). For example, for the [v1.23.0 release](https://github.com/momentohq/client-sdk-dotnet/releases/tag/v1.23.0), you would download [MomentoSdkUnity-1.23.0.zip](https://github.com/momentohq/client-sdk-dotnet/releases/download/v1.23.0/MomentoSdkUnity-1.23.0.zip). This .zip file contains a special version of the Momento .NET SDK that utilizes gRPC-Web due to HTTP/2 compatibility limitations in Unity. Required DLL dependencies are also included in the zip. 
4. Unzip its contents inside the folder `Assets/MomentoSdkUnity`. 

## Building the Unity Chat Application with Momento Topics
Once you get to this step, you are ready to start building the user interface and writing the C# scripts to connect to Momento Topics via the [Momento .NET SDK](https://docs.momentohq.com/cache/develop/sdks/dotnet). 

In this tutorial, we'll utilize the already existing example code in the cloned repository and in the following two sections we'll give an overview of how the UI and C# code is setup.

### Understanding the User Interface
In our example project, the user interface is already built out into two separate [Unity UI Canvas](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UICanvas.html) elements, one for letting the user choose a name and one for the actual text chat.

As shown below, the NameCanvas contains a [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/) input field and a "Start" button. 

![NameCanvas](/img/unity/NameCanvas.png)

After the user enters a name, either pressing the Enter key or clicking on the "Start" button will start the chat application. Once that happens, our C# script will hide the NameCanvas and then show the MessagingCanvas. 

The MessagingCanvas contains a [Scroll View](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIInteractionComponents.html#scroll-rect-scroll-view) that will enable our chat messaging window to be scrollable. With the appropriate [positioning of the UI elements](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/UIBasicLayout.html), we can make the chat messaging area grow upwards, letting the latest messages always show at the bottom.

![MessagingCanvas](/img/unity/MessagingCanvas.png)

The MessagingCanvas also has an emoji button that allows the user to view available emojis and to add emojis to the chat:

![Demo Video](/img/unity/emojis.png)

A helper C# script `EmojiHelper.cs` is used to handle the emoji insertion.

### Setting up the C# script that subscribes to the Momento Topic
In our example code, the magic happens in `Assets/TopicsTest.cs`, which is based upon the [Momento .NET SDK Topic Example](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample).

The first thing we need to do is to let our C# script know about the API key we created above in the [Momento Prerequisite](#momento) step. Following the [Momento .NET SDK Topic Example](https://github.com/momentohq/client-sdk-dotnet/tree/main/examples/TopicExample), we can either grab the API key from an environment variable or hard-code the API key in our code (note that hard-coding your API key in code is NOT recommended but can be used for testing purposes, if necessary; an alternative approach using a [Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) is described below in [Example Scenes](#example-scenes)):
- To set the environment variable in Windows, click the Windows Start button, search for "environment" and click on "Edit the system environment variables." Then click on "Environment Variables" and ensure the `MOMENTO_API_KEY` environment variable is set. You may need to restart Unity to get it to recognize your newly created environment variable.
- To hard-code the API key in a C# script, copy and paste your API key into `Assets/TopicsTest.cs` replacing `ADD_YOUR_TOKEN_HERE` in the `ReadAuthToken()` function.

After the API key is appropriately set, you can go ahead and click on the "Play" button in the Unity Editor to test it out! 

### Example Scenes
In the example code, we provide three example Unity scenes, showcasing various ways to integrate the Momento SDK with Unity:
- `MomentoTopicsDemo.unity` (using `TopicsTest.cs`): utilizes `Task.Run()` to run the subscription to the Momento Topic in a background thread. This is the approach descirbed above.
- `MomentoTopicsDemo-Coroutine.unity` (using `TopicsTestCoroutine.cs`): utilizes Unity Coroutines to run the subscription asyncronously in the main thread.
- `MomentoTopicsDemo-TokenVendingMachine.unity` (using `TopicsTestTokenVendingMachine.cs`): utilizes the example [Momento Token Vending Machine](https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine) to obtain a temporary, restricted scope Momento auth token. This is beneficial because (1) we no longer need to hard-code in a specific auth token into the app, and (2) we can utilize a `tokenId` embedded in the Topics message to more securely know which client/username sent a specific message. Note that you'll need to explicitly setup the Token Vending Machine separately and then specify its URL via the `tokenVendingMachineURL` variable specified in `TopicsTestTokenVendingMachine.cs`.

## Conclusion

In conclusion, to integrate Momento with Unity is as simple as downloading the latest [MomentoSdkUnity release .zip file](https://github.com/momentohq/client-sdk-dotnet/releases) and unzipping it anywhere within your Unity `Assets` folder. In this tutorial, we took it a step further and demonstrated how to set up a simple chat user interface that connects to a Momento Topic for easy publishing of messages and subscribing to messages. 
