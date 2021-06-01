import type { Eq } from 'fp-ts/lib/Eq';

type Ordering = -1 | 0 | 1;

export interface Ord<A> extends Eq<A> {
  readonly compare: (x: A, y: A) => Ordering;
}
