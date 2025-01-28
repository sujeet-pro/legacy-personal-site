---
title: Exponential Backoff Retry Strategy
description: It is a technique where an application progressively increases the waiting time between retry attempts after a failed operation
isDraft: false
featuredRank: 0
image: null
imageCredit: null
pubDate: 2025-01-23
lastUpdatedDate: 2025-01-25
category: programming
tags:
  - javascript
  - programming-patterns
---

## TL;DR

- Transient Failures do happen, for which we can retry with a limit
- Retry increases load on already overloaded servers
- Retry by adding a delay that increases exponentially, will reduce the load.

## Sample Scenario

- You have an UI, which shows some data.
- The data is fetched at client side via some API
- The server serving the request is overloaded or some throttling is implemented, hence the server is rejecting new calls.
- Making the api call again may succeed.
- So this application needs to add retries.

## Strategy 1 - Retry ASAP

- We want the users to see the data ASAP
- So we will retry ASAP

```ts showLineNumbers
type AsyncFunction<T> = () => Promise<T>
async function retryAsync<T>(fn: AsyncFunction<T>, retries: number): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`)
      return retryAsync(fn, retries - 1)
    } else {
      throw error
    }
  }
}
```

### Problem with Immidiate Retry

- The server on load will increase drastically, You would be calling this `1000/response-time-in-ms`
- Eg: For an API with response time of 50ms, it would now make 20 calls per second.
- So we should probably add some waiting time before the next call

### Strategy 2: Retry with constant wait

```ts {11} showLineNumbers
type AsyncFunction<T> = () => Promise<T>
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function retryAsync<T>(fn: AsyncFunction<T>, retries: number, delay: number): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`)
      await wait(delay)
      return retryAsync(fn, retries - 1)
    } else {
      throw error
    }
  }
}
```

### Strategy 3: Retry with exponential Wait

```ts
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export async function exponentialBackoffRetryRecursive<T>(
  asyncFunction: () => Promise<T>,
  retries: number,
  delay: number,
  attempt: number = 0
): Promise<T> {
  try {
    return await asyncFunction()
  } catch (error) {
    if (attempt >= retries) {
      throw error
    }
    await wait(delay * Math.pow(2, attempt))
    return exponentialBackoffRetryRecursive(asyncFunction, retries, delay, attempt + 1)
  }
}
```

### Final Code: Abortable Retry with Expontial Back-off

The Functions should be abortable in production code.

```ts
export async function exponentialBackoffRetryRecursive<T>(
  asyncFunction: () => Promise<T>,
  retries: number,
  delay: number,
  attempt: number = 0,
  signal?: AbortSignal
): Promise<T> {
  if (signal?.aborted) {
    throw new Error('Operation aborted')
  }

  try {
    return await asyncFunction()
  } catch (error) {
    if (attempt >= retries) {
      throw error
    }
    await wait(delay * Math.pow(2, attempt), signal)
    return exponentialBackoffRetryRecursive(asyncFunction, retries, delay, attempt + 1, signal)
  }
}

function wait(ms: number, signal?: AbortSignal): Promise<void> {
  const { promise, reject, resolve } = Promise.withResolvers<void>()
  if (signal?.aborted) {
    reject(new Error('Operation aborted'))
  }
  const timeoutId = setTimeout(resolve, ms)
  signal?.addEventListener('abort', () => {
    clearTimeout(timeoutId)
    reject(new Error('Operation aborted'))
  })
  return promise
}
```

## References

- [Code Samples With Tests](https://github.com/sujeet-pro/code-samples/tree/main/patterns/exponential-backoff)
- [Wikipedia Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
