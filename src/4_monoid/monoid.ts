import type { Semigroup } from 'fp-ts/lib/Semigroup';

export interface Monoid<A> extends Semigroup<A> {
  readonly empty: A;
}
