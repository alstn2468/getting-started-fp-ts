import type { IO } from 'fp-ts/lib/IO';
import type { Monoid } from 'fp-ts/lib/Monoid';

export function getMonoid<A>(M: Monoid<A>): Monoid<IO<A>> {
  return {
    concat: (x, y) => () => M.concat(x(), y()),
    empty: () => M.empty,
  };
}
