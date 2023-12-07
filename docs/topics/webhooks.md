---
sidebar_position: 3
sidebar_label: Webhooks
sidebar_class_name: "sidebar-item-webhooks-overview"
title: Webhooks Overview
pagination_prev: null
description: Learn about Webhooks, an event driven mechanism to listen to Momento Topics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![An image of a fast moving city as Momento Topics](@site/static/img/webhooks-overview.png)

## What are Webhooks?

Webhooks are outbound HTTP requests sent from a source to a destination. They are fired automatically when the event that they are listening to is fired. They are a key component of facilitating event driven architecture between two separate systems. 

## Webhooks at Momento

At Momento, webhooks provide an additional method of consuming topic messages. Webhooks are created listening to a specific topic. When a message gets published to that topic, Momento sends an outbound HTTP POST request to the webhook destination.  

## Where can I use Webhooks?

There are two aspects to a webhook, the source and the destination. Momento is the source for all webhooks, so that just leaves the destination. The destination is any POST url that can be invoked by Momento. As long as the url can be POST'ed to by Momento, it will be a valid webhook destination.

### Serverless Webhooks

You can create a lambda/step function backed by api gateway or use a cloud run function, and have that be the entrypoint to a webhook. When the webhook fires, you lambda/step function can handle the response add process the data appropriately. How you process the data is completely up to you! Post to Slack, send to a data lake, update a database entry, the possibilities are endless!

## Examples

- [Mulit-Language Chat Application](https://github.com/momentohq/moderated-chat/) This application is a chat application that lets users communicate in multiple languages. Users can select which language stream that they want to listen to. Whenever a message gets sent, it gets translated to all our supported languages, and the language the user is subscribed to is the language they will receive. The webhook is a lambda backed by api gateway, which receives all published messages, translates them, and sends them out to all the supported languages. 

## Blog posts

- [Using Webhooks with API Gateway + Lambda](https://www.gomomento.com/blog/how-to-use-webhooks-and-momento-topics-to-build-a-multi-language-chat-app) - An introduction to setting up your first webhook
