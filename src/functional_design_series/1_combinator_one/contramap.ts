import type { Eq } from 'fp-ts/lib/Eq';
import { fromEquals } from 'fp-ts/lib/Eq';

export const contramap = <A, B>(f: (b: B) => A) => (E: Eq<A>): Eq<B> =>
  fromEquals((x, y) => E.equals(f(x), f(y)));
