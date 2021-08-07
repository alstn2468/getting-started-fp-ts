import { pushPromise } from './pushPromise';

export function sequence<T>(promises: Array<Promise<T>>): Promise<Array<T>> {
  const init: Promise<Array<T>> = Promise.resolve([])
  return promises.reduce(pushPromise, init)
}
