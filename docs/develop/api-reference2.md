### DictionaryFetch

Gets a dictionary item from a cache.

| Name            | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| cacheName       | String | Name of the cache.                            |
| dictionaryName  | String | The name of the dictionary to be retreived. |

Responses
* Hit
    - valueDictionaryBytesBytes(): Map<Bytes, Bytes>
    - valueDictionaryStringString(): Map<String, String>
    - valueDictionaryStringBytes(): Map<String, Bytes>
    - valueDictionaryBytesString(): Map<Bytes, String>
    - toString(): string - displays the key/value pairs, truncated.
* Miss
* Error