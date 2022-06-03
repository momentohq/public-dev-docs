---
sidebar_position: 2
---

# Deploying a basic serverless application

In this step, we will deploy a basic serverless application on AWS. This service will not use caching yet -- we are going to start with the straightforward implementation of our service first. In the following steps, we will see how to improve performance of our application by adding caching with Momento.

We are building an account management service. Our application will use three AWS services to implement our account management features:

- **[AWS Lambda](https://aws.amazon.com/lambda/):** an ephemeral, function-based, pay-per-use compute service that is a core part of many serverless applications on AWS;

- **[AWS API Gateway](https://aws.amazon.com/api-gateway/):** a pay-per-use service that handles HTTP requests and routes them to our Lambda functions; and

- **[Amazon DynamoDB](https://aws.amazon.com/dynamodb/):** a fully-managed NoSQL database from AWS that offers a pay-per-use pricing, a Lambda-friendly connection model, and consistent performance at any scale.

Additionally, we will use the [Serverless Framework](https://www.serverless.com/framework) to assist with deployment. The Serverless Framework is an infrastructure-as-code tool that makes it easy to manage and deploy your serverless applications.

In the interest of brevity, this tutorial won't walk through every line of code that is written in our serverless application. Rather, we will point out a few key aspects of the code that guide how serverless applications work.

For a deeper understanding of the code in this example, please review the documentation in the tutorial repository -- TODO. The code referenced in this step will be from the `step-1` branch of the repository. You can also find out more about the AWS services used or the Serverless Framework by reading their respective documentation pages linked above.

This step will proceed by first walking through key points in the application code to teach concepts about serverless applications. Then, it will show how to deploy and use your application. If you would like to jump straight to the action, please navigate to the [deployment and usage section](#deploying-and-usage).

Let's get started.

## Key concepts in our serverless application

Before we deploy our application, we will cover two key concepts about working with serverless applications. First, we'll learn about infrastructure-as-code and how we manage it with our serverless.yml file. Then, we'll learn about the Lambda function handler. For each of these concepts, we'll refer to code from the tutorial repository.

### Infrastructure-as-code and the serverless.yml file

Serverless applications are often called "service-full" applications as they emphasize using managed services rather than running your own versions of the software. We can see this based on the components mentioned above for our own application:

- Using managed compute in AWS Lambda rather than running custom applications directly on Amazon EC2 instance;

- Using a managed API Gateway service rather than running our own Nginx load balancer; or

- Using a managed NoSQL database in DynamoDB rather than hosting our own MongoDB or open source relational database

While we're only using three services here, this is a pretty small application. In a larger application, the number of services and connections between them can be much larger.

![Charlie conspiracy meme with serverless architecture background](images/serverless_charlie.png)

_Meme credit: [@swyx](https://twitter.com/swyx/status/1423025792783568899)_

Note that while this may seem overwhelming, it's actually making explicit what is implicitly happening in your application. If you have a single application handling fifteen endpoints, that server box appears more simple than fifteen separate Lambda function icons. But the complexity is still there -- it's just not on your architecture diagram.

To handle all these services, it is imperative that you use infrastructure-as-code to manage your serverless application. Infrastructure-as-code is a pattern where you declare the infrastructure that will make up your application in a codified format, generally to be deployed just like the rest of your application code. This is in contrast to configuring your infrastructure manually using a web browser or with ad-hoc scripts.

If you're building serverless applications, the foundational infrastructure-as-code tool is [AWS CloudFormation](https://aws.amazon.com/cloudformation/). CloudFormation itself can be verbose and confusing, particularly when wiring together serverless applications, so there are various abstractions built on top of CloudFormation for serverless-specific applications. One of the more popular ones is the Serverless Framework, which we will use in this tutorial.

When using the Serverless Framework in your application, you will describe your infrastructure in a serverless.yml file. You can look at the full file in the application repository (TODO LINK). I want to discuss a few points of the file.

First, look at the `functions` block.

![Serverless.yml functions block](images/functions_block.png)

AWS Lambda functions are the core of most serverless applications, and the Serverless Framework makes it easy to provision them there. Notice that the functions are fine-grained -- we have four different functions, each handling a specific REST endpoint in our application. Each of them has a `handler` property that points to a file and exported function that will serve as the entrypoint for this Lambda function. We'll look at the handler code shortly.

Second, notice that each function has an `events` property with a listed HTTP method and path.

![Event triggers](images/function_events.png)

Lambda functions are _event-driven compute_ -- your code is only executed upon the occurrence of a specified event, and it is triggered with the context of that event in mind.

For these examples, each of these functions will be triggered by an HTTP request to our API Gateway instance. API Gateway will route the request to the correct Lambda function based on the method and path of the request, and our Lambda function code will be invoked with details of the request, such as the HTTP headers and request body.

Finally, look at the `resources` block.

![Serverless resources](images/serverless_resources.png "image_tooltip")

While Lambda functions are the core of our serverless application, we also need to provision supporting resources. We can do so by writing standard CloudFormation in the resources block. For this application, we are provisioning a DynamoDB table that will be used in our application.

Now that we know the basics of the serverless.yml file and infrastructure-as-code, let's look a little deeper at our Lambda functions.

### The Lambda function handler

In reviewing the infrastructure code that declared our Lambda functions, we saw that each function had a handler property that pointed to a specific file and exported function as the entrypoint to our Lambda function. Let's take a look at one of those files now.

All of our function handlers are located in the `src/handlers` directory. Navigate to that directory and open the `createUser.js` file. The contents will look as follows:

![Lambda function handler](images/lambda_handler.png)

Let's walk through what's happening here.

First, notice the function called `handler` that makes up most of the contents of the file. This is the entrypoint to our Lambda function. When a configured event triggers this Lambda function, the Lambda service will call this function with details about the triggering event.

Our handler function takes in two arguments: event and context. The event argument is an object that contains all the specific details of the event that triggered our function. For an HTTP request event, that means the request body, headers, and route information. You will use this argument to customize the handler logic in response to the event.

You can see that the first line of this function parses the `body` property on the `event` object to extract the `username`, `firstName`, and `lastName` properties that will be used to create a new User.

The context argument contains metadata information about the function itself, including the function name and basic configuration options.

![Lambda handler breakdown](images/handler_breakdown.png)

Second, notice what we return from the handler function. It is an object containing `statusCode` and `body` properties. Because our Lambda function will be handling HTTP request events, we need to indicate to API Gateway how to craft the response to the request. We can include information about the status code and body, as shown here, as well as HTTP headers to be included in the response.

Finally, notice that our handler is calling the `createUser` method on an `AccountService` instance. This service encapsulates the business logic around creating a User in our application.

While we use the term "function" when talking about Lambda compute, you shouldn't think of it as analogous to a small, isolated function in your application code. A Lambda function will often call out to other functions within your application and handle complicated logic. Rather, think of your Lambda function as a "handler" -- it handles a particular unit of work, such as responding to an HTTP request.

I like to keep my handler code small and focused. It will parse inputs, handle some minor validation, and assemble the appropriate response at the end. Most of the gnarly logic is contained within a separate service module within my application. This service module can be shared across the various handlers in my application.

We'll look deeper at the AccountService in the next step of this tutorial. For now, let's deploy and interact with our application.

## Deployment and usage

Time to see our serverless application in action.

### Deploying our serverless application

In the root directory of the application (the same directory with your `serverless.yml` file), run the following command to deploy your application:

    serverless deploy

This is a command from the Serverless Framework to build and deploy your application. First, it will create ZIP files for your Lambda functions and upload those files to S3. Then, it will create and configure the resources specified in your serverless.yml file. The serverless.yml file may only have about 50 lines of YAML, but it's actually provisioning 31 separate resources, including your Lambda functions, API Gateway instance, DynamoDB table, and supporting infrastructure.

For this initial deployment, the command will take a few minutes to complete.

Once your deployment is finished, you will see summary information about your application printed to the terminal. It should look similar to the following:

    ✔ Service deployed to stack momento-serverless-tutorial-dev (58s)

    endpoints:
      POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/users
      POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations
      POST - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations/{organization}/members
      GET - https://${apiId}.execute-api.us-east-1.amazonaws.com/dev/organizations/{organization}/members/{username}
    functions:
      createUser: momento-serverless-tutorial-dev-createUser (21 kB)
      createOrganization: momento-serverless-tutorial-dev-createOrganization (21 kB)
      addUserToOrganization: momento-serverless-tutorial-dev-addUserToOrganization (21 kB)
      userInOrganization: momento-serverless-tutorial-dev-userInOrganization (21 kB)

Notice that it lists each of your deployed functions as well as the full path to your various function endpoints. Each endpoint will be in the format of:

    https://${apiId}.execute-api.${awsRegion}.amazonaws.com/dev/${route}

Copy and paste the base domain and path of your API endpoint, without a specific route, and save it to a variable in your terminal with the following command:

    ENDPOINT=<yourEndpoint>

Be sure to replace "`<yourEndpoint>`" with your copied endpoint from the terminal.

### Interacting with our service

Now, let's interact with our application and use our deployed endpoints. The examples below use curl in your terminal, but you can also use the exported collection (TODO LINK to repo) in a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

First, let's create some users. We will create two users, _oliviaowner_ and _membermichael_, so that we can see how to interact with organizations and memberships in our application.

Create your first user by running the following command in your terminal:

    curl --request POST \
      --url ${ENDPOINT}/users \
      --header 'Content-Type: application/json' \
      --data '{ "username": "oliviaowner", "firstName": "Olivia", "lastName": "Smith"}'

You should see a response indicating that the user was created successfully:

    {"user":{"username":"oliviaowner","firstName":"Olivia","lastName":"Smith"}}

Create your second user by executing the following command in your terminal:

    curl --request POST \
      --url ${ENDPOINT}/users \
      --header 'Content-Type: application/json' \
      --data '{ "username": "membermichael", "firstName": "Michael", "lastName": "Scott"}'

Again, you should see a similar response indicating the second user was created

    {"user":{"username":"membermichael","firstName":"Michael","lastName":"Scott"}}

Now, let's create an organization using our first user. Run the following command in your terminal to create an organization:

    curl --request POST \
      --url ${ENDPOINT}/organizations \
      --header 'Authorization: oliviaowner' \
      --header 'Content-Type: application/json' \
      --data '{ "organizationName": "olivia-org"}'

You should see a response indicating that the organization was created successfully:

    {"organization":{"organizationName":"olivia-org","foundingUser":"oliviaowner"}}

When we created an organization, it also created a membership for the founder of that organization. We can check our logic is working correctly by checking our _userInOrganization_ endpoint to assert that oliviaowner is a member of olivia-org.

Run the following command in your terminal to check oliviaowner's membership in olivia-org:

    curl --request GET \
      --url ${ENDPOINT}/organizations/olivia-org/members/oliviaowner

You can see that oliviaowner is a member of the organization with a role of "Owner":

    {"membership":{"organizationName":"olivia-org","memberUsername":"oliviaowner","role":"Owner"}}

Let's try the same endpoint but with our other user, who is not currently a member of the organization.

Run the following command in your terminal:

    curl --request GET \
      --url ${ENDPOINT}/organizations/olivia-org/members/membermichael

For this user, you will see an error message indicating that membermichael is not a member of the organization:

    {"error":"User membermichael is not a member of organization olivia-org"}

Let's add our second user to the organization. To do so, we'll need to call the addMemberToOrganization endpoint while authorizing as a current member. For our application, you can "authenticate" yourself by sending a username in the Authorization header.

Run the following command to add our second user to the organization:

    curl --request POST \
      --url ${ENDPOINT}/organizations/olivia-org/members \
      --header 'Authorization: oliviaowner' \
      --header 'Content-Type: application/json' \
      --data '{ "memberUsername": "membermichael", "role": "Member"}'

You should see the following response:

    {"membership":{"organizationName":"olivia-org","memberUsername":"membermichael","role":"Member"}}

Finally, you can re-check the membership of our second user in our organization. You should now see membermichael as a member of olivia-org.

    {"membership":{"organizationName":"olivia-org","memberUsername":"membermichael","role":"Member"}}

In this step, we built and deployed a basic serverless application using Lambda, API Gateway, and DynamoDB. We also tested our endpoints to make sure the basic behavior is working as expected. But now it's time to improve the speed of our application.

In the next step, we'll start our cache implementation by installing and configuring Momento in our serverless application. In doing so, we'll learn more about the Lambda execution model so that we can get top performance out of our caching.
