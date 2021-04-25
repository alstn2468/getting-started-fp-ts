import type { Semigroup } from './semigroup';

export function getArraySemigroup<A = never>(): Semigroup<Array<A>> {
  return { concat: (x, y) => x.concat(y) };
}
