---
sidebar_position: 3
sidebar_label: Getting Started
sidebar_class_name: sidebar-item-getting-started
title: Getting Started
description: Jump in and get started quickly using Momento Serverless Cache with your SDK of choice or CLI.
---

# Getting Started with Momento Serverless Cache
If you're looking to jump in and get started with Momento Serverless Cache with an SDK or CLI, you've come to the right place. There are multiple ways to access the service below. 

## Try our CLI in your browser

You can try out our CLI tool today, right in your browser.  No software installation required!

Head over to our [Try Momento Serverless Cache page](https://www.gomomento.com/try-momento-for-free), and
you can experiment with Momento CLI commands in a shell session directly inside your browser.
You can create a free auth token, create a cache, and start running `set` and `get` commands
on your cache. It only takes a few minutes!

## Install the Momento command line interface (CLI)

If you want to run the CLI on your own machine instead of [running it in your browser](#try-our-cli-in-your-browser),
here's how to get started on different operating systems:

**macOS using [Homebrew package manager](https://brew.sh/)**

```
brew tap momentohq/tap
brew install momento-cli
```

**Linux**

1. Download the latest linux tar.gz file from [https://github.com/momentohq/momento-cli/releases/download/v0.22.8/momento-cli-0.22.8.linux_x86_64.tar.gz](https://github.com/momentohq/momento-cli/releases/download/v0.22.8/momento-cli-0.22.8.linux_x86_64.tar.gz)
2. Extract the `momento-cli-X.X.X.linux_x86_64.tar.gz` file
3. Move `./momento` to your execution path.

**Windows**

1. Download the latest windows zip file from [https://github.com/momentohq/momento-cli/releases/latest](https://github.com/momentohq/momento-cli/releases/latest)
2. Unzip the `momento-cli-X.X.X.windows_x86_64.zip` file
3. Run the unzipped `.exe` file

To verify the CLI was installed correctly, you can run our help command:

```
$ momento --help
momento 0.22.6
CLI for Momento APIs

USAGE:
    momento [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information
        --verbose

SUBCOMMANDS:
    account      Manage Accounts
    cache        Cache Operations
    configure    Configure Momento Credentials
    help         Print this message or the help of the given subcommand(s)
```
_Note: the version number listed in the output will vary._

### Obtain an auth token

[Authentication in Momento is done via an authentication token](./learn/how-it-works#authentication-token), and you can sign up for a Momento Serverless Cache auth token directly from the command line.

Authentication tokens are associated with a specific Momento Serverless Cache region. You can provision an auth token for a Region using the `account` command with your desired cloud provider and Region:

#### AWS [available regions are us-west-2, us-east-1, ap-northeast-1]

```console
momento account signup aws --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### GCP [available regions are us-east1, ap-northeast1]

```console
momento account signup gcp --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

#### Azure (Coming Soon) [reach out](mailto:support@momentohq.com) if interested

```console
momento account signup azure --email <TYPE_YOUR_EMAIL_HERE> --region <TYPE_DESIRED_REGION>
```

Be sure to replace `<TYPE_YOUR_EMAIL_HERE>` and `<TYPE_DESIRED_REGION>` with actual values.

*Note: If a region you wish to use is not available for your selected cloud provider, please [reach out](mailto:support@momentohq.com) to us to inquire about adding it.*

## Configure the Momento CLI

Momento will email your auth token to you. You can configure your local CLI to use this token by running the `momento configure` command:

```
$ momento configure
Token: < Enter token from email here >
Default Cache [default-cache]: < Name of cache to use on CLI by default >
Default TTL Seconds [600]: 30 // Sets the default TTL for cache entries. For demonstration purposes we are setting this lower right now.
[2022-03-31T15:31:25Z INFO  momento::commands::cache::cache_cli] creating cache...
[2022-03-31T15:31:33Z INFO  momento::commands::configure::configure_cli] default cache successfully created
```

You are now up and running with Momento Serverless Cache! Let's see how to use the Momento CLI to cache data in Momento Serverless Cache.

## Cache some data

The `cache` command in the Momento CLI is used to interact with your Momento Serverless Cache. Let's see a few of these commands in action.

First, you can use the `set` subcommand to store an item in your default Momento Serverless Cache:

```
$ momento cache set --key test --value value
[2022-03-31T15:45:17Z INFO  momento::commands::cache::cache_cli] setting key: test into cache: my-first-cache
[2022-03-31T15:45:18Z INFO  momento::commands::cache::cache_cli] set success
```

Then, you can retrieve the key using the `get` subcommand:

```
$ momento cache get --key test
[2022-03-31T15:45:25Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
value
```

In configuring the cache, we set a default Time to Live (TTL) of 30 seconds. If you wait 30 seconds and try to retrieve the cache again, you will see the item has disappeared:

```
$ sleep 30 // wait for item to expire
$ momento cache get --key test
[2022-03-31T15:46:02Z INFO  momento::commands::cache::cache_cli] getting key: test from cache: my-first-cache
[2022-03-31T15:46:03Z INFO  momento::commands::cache::cache_cli] cache miss
```

These are the standard `get` and `set` [data plane operations](./learn/how-it-works#data-plane-performant-cache-interactions) with the Momento CLI.

You can also manage [control plane operations](./learn/how-it-works#control-plane-simple-efficient-cache-management) with the Momento CLI, such as creating a cache, deleting a cache, or listing available caches.

You can see all of the available subcommands in the `cache` command by using the `momento cache --help` flag in your terminal:

```
$ momento cache --help
momento-cache
Cache Operations

USAGE:
    momento cache [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
        --verbose

SUBCOMMANDS:
    create    Creates a Momento Cache
    delete    Deletes the cache
    get       Gets item from the cache
    help      Print this message or the help of the given subcommand(s)
    list      Lists all momento caches
    set       Stores a given item in cache
```

Further, you can specify non-default configuration options for your commands, such as a different region, cache name, or TTL.

For more information about any of the parameters for a subcommand, you can use `momento cache $SUBCOMMAND --help` to learn more.

## Next steps

The CLI is great for testing and for understanding the core Momento Serverless Cache API, but most of your caching work will be done in your application. For those, you can use the Momento SDKs.

We currently have the following SDK's languages available. Check out each repo for detailed instructions and usage examples.

- [Go](https://github.com/momentohq/client-sdk-go)
- [Java](https://github.com/momentohq/client-sdk-java)
- [JavaScript](https://github.com/momentohq/client-sdk-javascript)
- [Python](https://github.com/momentohq/client-sdk-python)
- [.NET](https://github.com/momentohq/client-sdk-dotnet)
- [Rust](https://github.com/momentohq/client-sdk-rust)
- [PHP](https://github.com/momentohq/client-sdk-php)
- [Ruby](https://github.com/momentohq/client-sdk-ruby)
