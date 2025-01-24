---
title: Async Task Queue
description: An async task queue manages and controls the execution of asynchronous tasks, ensuring they run according to specified concurrency limits and order.
isDraft: false
featuredRank: 0
image: ./async-task-queue.svg
imageCredit: Async Task Queue and Executors
pubDate: 2025-01-23
lastUpdatedDate: 2025-01-23
tags:
  - javascript
  - programming-patterns
---

An async task queue is a data structure that manages the execution of asynchronous tasks in a controlled manner. It allows you to add tasks to the queue and ensures that they are executed according to specified rules, such as concurrency limits or execution order. Here are some key points about async task queues:

- **Task Management**: Tasks are added to the queue and are executed asynchronously. Each task is typically represented as a promise or a function that returns a promise.
- **Concurrency Control**: The queue can limit the number of tasks that are executed concurrently. This is useful for managing resource usage and preventing overload.
- **Order of Execution**: Tasks can be executed in the order they were added (FIFO - First In, First Out) or based on priority.
- **Error Handling**: The queue can handle errors in task execution, allowing for retries or logging of failures.
- **Background Processing**: Tasks can be processed in the background, allowing the main application to remain responsive.
- **Rate Limiting**: The queue can control the rate at which tasks are executed, which is useful for interacting with rate-limited APIs.
- **Workflow Orchestration**: Complex workflows with dependencies between tasks can be managed using an async task queue.

Overall, async task queues are a powerful tool for managing asynchronous operations in a controlled and efficient manner.

## Implementation

```ts
// Queue implementation using a linked list
class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class LinkedListQueue<T> {
  head: LinkedListNode<T> | null
  tail: LinkedListNode<T> | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(value: T) {
    const newNode = new LinkedListNode(value)
    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
    if (!this.head) {
      this.head = newNode
    }
    this.size++
  }

  // Dequeue: Remove an element from the front of the queue
  dequeue(): T {
    if (!this.head) {
      throw new Error('Queue is empty')
    }
    const value = this.head.value
    this.head = this.head.next
    if (!this.head) {
      this.tail = null
    }
    this.size--
    return value
  }

  isEmpty() {
    return this.size === 0
  }
}

// Async Task

type Task<T = void> = () => Promise<T>

class AsyncTaskQueue {
  private queue = new LinkedListQueue<Task>()
  private activeCount = 0
  private concurrencyLimit: number

  constructor(concurrencyLimit: number) {
    this.concurrencyLimit = concurrencyLimit
  }

  addTask<T>(promiseFactory: Task<T>): Promise<T> {
    const { promise, resolve, reject } = Promise.withResolvers<T>()
    const task: Task = async () => {
      try {
        const result = await promiseFactory()
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }
    this.queue.enqueue(task)
    this.processQueue()
    return promise
  }

  private async processQueue(): Promise<void> {
    if (this.activeCount >= this.concurrencyLimit || this.queue.isEmpty()) {
      return
    }

    const task = this.queue.dequeue()
    if (task) {
      this.activeCount++
      try {
        await task()
      } finally {
        this.activeCount--
        this.processQueue()
      }
    }
  }
}

// Usage example
const queue = new AsyncTaskQueue(3)

const createTask = (id: number, delay: number) => () =>
  new Promise<void>((resolve) => {
    console.log(`Task ${id} started`)
    setTimeout(() => {
      console.log(`Task ${id} completed`)
      resolve()
    }, delay)
  })

queue.addTask(createTask(1, 1000))
queue.addTask(createTask(2, 500))
queue.addTask(createTask(3, 1500))
queue.addTask(createTask(4, 200))
queue.addTask(createTask(5, 300))
```

## References

- [MDN With Resolvers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)
