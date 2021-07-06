import type { Eq } from 'fp-ts/lib/Eq';
import { fromEquals } from 'fp-ts/lib/Eq';

export function getEq<A>(E: Eq<A>): Eq<ReadonlyArray<A>> {
  return fromEquals(
    (xs, ys) =>
      xs.length === ys.length && xs.every((x, i) => E.equals(x, ys[i])),
  );
}
