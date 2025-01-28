---
sidebar_position: 5
sidebar_label: Bulk data writing
title: Bulk data writing Redis, CSV, and JSON into Momento Cache
description: Learn to migrate heaps of data into Momento Cache smoothly.
---

# Efficient bulk writes to Momento Cache from Redis, CSV, JSON, and more

If you need to migrate large volumes of data from an existing source into your Momento cache, you’re in the right place. The pipeline proposed here supports Redis data sources, but the design is extensible to other data sources like CSV, JSON, Parquet, and Memcache, among others.

Momento provides a bulk loading toolkit that simplifies extraction, validation, and loading, either individually or via a streamlined pipeline.

![diagram](/img/bulk-writing-diagram.svg)

In the above diagram, you can see the pipeline first normalizes (extracts) data sources into a common format, [JSON lines (JSON-L)](https://jsonlines.org/). Then checks are performed to identify data incompatible with Momento. Finally, the valid data is loaded into your cache.

We encourage and welcome contributions to add more data sources. You can also request support for a particular data source by contacting us via [Discord](https://discord.com/invite/3HkAKjUZGq) or email [Momento support](mailto:support@momentohq.com).

## Setting up the toolset workflow

### Prerequisites

To use the toolset for reading a Redis database, ensure you have Java 8 or a higher version installed. For Windows users, you'll additionally either need to install bash or run the Linux version using the Windows Subsystem for Linux (WSL).

### Installation steps

1. Navigate to the [releases page to download](https://github.com/momentohq/momento-bulk-writer/releases) the latest release.
2. Choose between Linux, OSX, and Windows runtimes.
3. Decompress the release and untar it to your preferred directory.

Below is an example for Linux:

```cli
$ wget https://github.com/momentohq/momento-bulk-writer/releases/download/${version}/momento-bulk-writer-linux-x86.tgz
$ tar xzvf momento-bulk-writer-linux-x86.tgz
$ cd ./momento-bulk-writer-linux-x86
$ ./extract-rdb.sh -h
$ ./validate.sh -h
$ ./load.sh -h
```

## Usage guide

This section provides a step-by-step guide on using the toolset for a Redis to Momento data pipeline. The process involves three key steps: extracting a Redis database to JSON lines, validating the JSON lines, and finally loading the JSON lines into Momento.

### Obtaining Redis database (RDB) files

Firstly, you'll need to obtain RDB file(s) by either creating a [backup in Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-manual.html) or [running BGSAVE on an existing Redis instance](https://redis.io/commands/bgsave/).

### Extracting and validating Redis database files

Assuming you have a directory of RDB files located in `./redis` and you wish to write the output to the current directory, use the `extract-rdb-and-validate.sh` script as follows:

```cli
$ ./extract-rdb-and-validate.sh -s 1 -t 1 ./redis
```

The command will extract the RDB files in `./redis` to JSON lines format and write the output to the current directory. The `-s` and `-t` flags set the max size in MiB and max time-to-live (TTL) in days of items in the cache, respectively. If an item exceeds [Momento’s service limits](/cache/manage/limits), item size (5 MB), or a TTL (24 hours), that item will be flagged by the process.

For more information, check out [Service Limits](/cache/manage/limits).

### Inspecting the output

Your current directory should now contain several output files and directories. The important new directories are `validate-strict` and `validate-lax`. `validate-strict` contains data for any mismatches between Redis and Momento, while `validate-lax` contains data for fewer of the criteria, catching only wholly unsupported data. You'll also find a validation report detailing the data validation process.

Some details of the reports:
The `validate-strict` directory has data from any mismatch between source data (Redis) and Momento Cache, if the data:

- exceeds the max item size, or
- has a TTL greater than the max TTL, or
- is missing a TTL (as this is required for Momento Cache), or
- is a type unsupported by Momento Cache

This is helpful in understanding which data lacks a TTL to understand what TTL to apply. Customers have found this especially useful as it identifies outliers in their data, which could be due to bugs in their application logic.

To contrast, the `validate-lax` directory has data if the data:

- exceeds [Momento’s max item size](/cache/manage/limits), or
- is a type unsupported by Momento

The `validate-lax` directory contains data that is unsupported to load into Momento Cache and should be reviewed manually. For example, items with a TTL greater than the Momento max, items lacking a TTL, or those already expired can be addressed and then loaded into Momento.

### Loading data into Momento Cache

Finally, we will load the validated data into Momento using the load script. Following our example:

```cli
$ ./load.sh -a $AUTH_TOKEN -c $CACHE -t 1 -n 10 ./validate-lax/valid.jsonl
```

This command will load the data in `./validate-lax/valid.jsonl` into the cache `$CACHE` with a default TTL of one day, using your Momento auth token `$AUTH_TOKEN`. The `-n` flag sets the number of concurrent requests to make to Momento.

### Verifying data in Momento Cache

Optionally, you can verify the data in Momento Cache matches what is on disk using the verify subcommand. This is a sanity check that should succeed, less items that have already expired.

```cli
$ ./bin/MomentoEtl verify -a $AUTH_TOKEN -c $CACHE -n 10 ./validate-lax/valid.jsonl
```

This tool prints any differences between the items on disk and items in your cache. If we did things right, then we expect no error output.

### Running from an EC2 instance

The toolset has been tested on an in-region m6a.2xlarge EC2 instance with 64GB disk space on AWS. We first performed a sweep of concurrent requests to determine the optimal rate.

Enjoy this powerful toolset and the convenience of bulk-writing data to Momento Cache.
