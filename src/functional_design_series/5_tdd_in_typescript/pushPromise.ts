import { push } from './push';
import { liftA2 } from './liftA2';

export function pushPromise<T>(
  acc: Promise<Array<T>>,
  x: Promise<T>,
): Promise<Array<T>> {
  return liftA2<Array<T>, T, Array<T>>(push)(acc, x);
}
