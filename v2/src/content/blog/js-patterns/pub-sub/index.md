---
title: Pub Sub
description: Publisher Subscriber Pattern for decoupling
isDraft: false
isContentSummaryOpen: false
image: ./pub-sub.svg
imageCredit: Pub-Sub data flow
publishedOn: 2023-03-01
lastUpdatedOn: 2023-03-01
topics:
  - performance
---

The Publish-Subscribe (Pub/Sub) pattern is a software design pattern that facilitates communication between different parts of your application without tight coupling. It establishes a central communication hub, often called a "message broker" or "event bus," that enables components to:

- Publish (Emit) messages (events) to notify interested parties about something that has happened.
- Subscribe (Listen) to specific messages (events) to receive notifications and react accordingly.

## Implementation

```ts
type Task<T> = (data: T) => void

export class PubSub<T> {
  #subscriber = new Set<Task<T>>()
  constructor() {}

  subscribe(task: Task<T>) {
    this.#subscriber.add(task)
    return () => {
      this.#subscriber.delete(task)
    }
  }

  notify(data: T) {
    for (const subscriber of this.#subscriber) {
      subscriber(data)
    }
  }
}
```

## Usages

```ts
const pubSub = new PubSub<string>()

// Can have one more more subscriber
const unsubscribe = pubSub.subscribe((data) => {
  console.log(data)
})

// Event Emitted by some other part of the code
pubSub.notify("message1")
pubSub.notify("message2")
pubSub.notify("message3")

// In future, on certain condition: all the subscribers will unsubscribe
unsubscribe()
```
