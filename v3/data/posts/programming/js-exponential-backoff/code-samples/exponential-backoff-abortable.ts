import { waitAbortable } from './wait-abortable'

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
    await waitAbortable(delay * Math.pow(2, attempt), signal)
    return exponentialBackoffRetryRecursive(asyncFunction, retries, delay, attempt + 1, signal)
  }
}
