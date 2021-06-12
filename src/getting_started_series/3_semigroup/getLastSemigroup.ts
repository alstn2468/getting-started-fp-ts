import type { Semigroup } from './semigroup';

/** 항상 두 번째 인자를 반환한다. */
export function getLastSemigroup<A = never>(): Semigroup<A> {
  return { concat: (_, y) => y };
}
