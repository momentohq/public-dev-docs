---
sidebar_position: 5
sidebar_label: Working with Time Series Data
title: Working with Time Series Data
description: Learn how to store time series data in Momento Cache
pagination_next: null
---

# Storing time series data

Temporarily storing time series data enables you to visualize that data without having to worry about longterm storage costs. Let's think about a common use case for time series data like IoT sensors. Sure, it's useful to see what the recent data looks like, but do you need to keep each sensor value indefinitely? With numerous sensors sending metrics into your database, your storage costs will skyrocket. Storing that data in Momento instead is a great way to take advantage of what Momento does best - storing large volumes of data without having to worry about scaling up or longterm storage costs.

You can store time series data with the SortedSet data type. Using SortedSet automatically sorts your data by timestamp, making it easy to visualize that data using charts and graphs. You can take advantage of multiple access patterns using the Momento SDK's SortedSetFetchByRank and SortedSetFetchByScore. Using those methods enables you to retrieve a certain number of datapoints or datapoints for a certain time range.

## Storing time series data in the SortedSet:
Use the Momento SDK's [SortedSetPutElement](https://docs.momentohq.com/develop/api-reference/collections/sortedsets#sortedsetputelement) method to insert items into your SortedSet.

Let's consider a workload for storing IoT sensor data in a Momento Cache.

- Each sensor has its own SortedSet.
- Each sensor_value within sensor's SortedSet is a JSON string containing the value and timestamp
i.e. JSON.stringify("value":1, "timestamp": 1686583076)
- Each score for the item in the SortedSet is the timestamp of the datapoint. SortedSets use scores to sort the data within the set.

>Code snippet for writing SortedSet into the Cache

```
const item_value = JSON.stringify({"sensor_value": sensor_value, "timestamp": timestamp})

const response = await cacheClient.sortedSetPutElement("sensor_data", `${sensor_id}-sensor-data`, item_value, timestamp)
```

Retrieving time series data from the sorted set:

Use SortedSetFetchByRank to retrieve data from the cache. If you want to retrieve the entire SortedSet, don't pass in any startRank and endRank parameter values.

>Code snippet for SortedSetFetchByRank to retrieve the entire SortedSet

```
const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`)
```

If you only want to retrieve a subset of the SortedSet, you could set the startRank and endRank parameter values as follows:

>Code snippet for SortedSetFetchByRank to retrieve a subset of the SortedSet

const sensor_data = await cacheClient.sortedSetFetchByRank("sensor_data", `${sensor_id}-sensor-data`, 0, 10)

If you only want to retrieve data from a specified time period instead of a specific number of values you can use SortedSetFetchByScore. 

>Code snippet for SortedSetFetchByScore to retrieve a subset of the SortedSet

const sensor_data = await cacheClient.sortedSetFetchByScore("sensor_data", `${sensor_id}-sensor-data`, 1686511076, 1686597476)

### Considerations:

Sensor Index Set:

If you have multiple Sensors pushing data into your cache, consider adding a Set data type to store all the Sensor ID's. You'll need to pass in a Sensor ID when fetching data from the SortedSets. Your client application can retrieve all the Sensor ID's from this Set prior to fetching the time series data, then fetch data for every sensor from the Sorted Sets.

Time To Live (TTL) Values:

Your TTL value will depend on how long you need to keep the time series data visible for your users. If you're displaying your time series data in a chart on the client application, ensure your earliest time value in the chart is aligned with the TTL for the time series data.