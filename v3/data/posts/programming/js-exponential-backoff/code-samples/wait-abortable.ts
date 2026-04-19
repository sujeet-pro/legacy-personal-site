export function waitAbortable(ms: number, signal?: AbortSignal): Promise<void> {
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
