---
title: Momento regions
description: View the available regions for the Momento Platform
pagination_next: null
hide_title: true
displayed_sidebar: platformSidebar
keywords:
  - momento
  - cache
  - caching
  - topics
  - pubsub
  - pub/sub
  - redis
  - serverless
  - region
  - availability
---

# Available regions

Momento is a region-based service with availability all over the world. If you do not see a region you require, let’s discuss. Please [contact support](mailto:support@momentohq.com).

:::info[Enterprise availability]

  Private cells are available for **enterprise customers** in all AWS-supported commercial regions. [Contact support](mailto:support@momentohq.com) to discuss setup and deployment options.

:::

<table className="customTable">
  <thead>
    <tr>
      <th>Region name</th>
      <th>Region</th>
      <th>Cell name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>US East (N. Virginia)</td>
      <td>us-east-1</td>
      <td><code>cell-us-east-1-1</code></td>
    </tr>
    <tr>
      <td>US East (Ohio)</td>
      <td>us-east-2</td>
      <td><code>cell-1-us-east-2-1</code></td>
    </tr>
    <tr>
      <td>US West (Oregon)</td>
      <td>us-west-2</td>
      <td><code>cell-4-us-west-2-1</code></td>
    </tr>
    <tr>
      <td>Europe (Ireland)</td>
      <td>eu-west-1</td>
      <td><code>cell-1-eu-west-1-1</code></td>
    </tr>
    <tr>
      <td>Europe (London)</td>
      <td>eu-west-2</td>
      <td><code>cell-1-eu-west-2-1</code></td>
    </tr>
    <tr>
      <td>Europe (Frankfurt)</td>
      <td>eu-central-1</td>
      <td><code>cell-1-eu-central-1-1</code></td>
    </tr>
    <tr>
      <td>Asia Pacific (Mumbai)</td>
      <td>ap-south-1</td>
      <td><code>cell-1-ap-south-1-1</code></td>
    </tr>
    <tr>
      <td>Asia Pacific (Tokyo)</td>
      <td>ap-northeast-1</td>
      <td><code>cell-ap-northeast-1-1</code></td>
    </tr>
    <tr>
      <td>Asia Pacific (Singapore)</td>
      <td>ap-southeast-1</td>
      <td><code>cell-1-ap-southeast-1-1</code></td>
    </tr>
    <tr>
      <td>Asia Pacific (Sydney)</td>
      <td>ap-southeast-2</td>
      <td><code>cell-1-ap-southeast-2-1</code></td>
    </tr>
  </tbody>
</table>

## Accessing region-based resources

### HTTP API endpoints

Compose HTTP API endpoints using the following pattern:

```
https://api.cache.<cell-host>.prod.a.momentohq.com
```

Example (`us-west-2`):

```
https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com
```

More information about the HTTP interface is available in the [HTTP API reference](/cache/develop/api-reference/http-api).

### RESP endpoints

RESP connectivity uses the cell host without the `api.` prefix:

```
https://cache.<cell-host>.prod.a.momentohq.com
```

Example (`ap-southeast-1`):

```
https://cache.cell-1-ap-southeast-1-1.prod.a.momentohq.com
```

More information about RESP connectivity is available on the [RESP compatibility page](/cache/resp).
