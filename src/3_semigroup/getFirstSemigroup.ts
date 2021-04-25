import type { Semigroup } from './semigroup';

/** 항상 첫 번째 인자를 반환한다. */
export function getFirstSemigroup<A = never>(): Semigroup<A> {
  return { concat: (x, _) => x };
}
