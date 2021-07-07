import type { IO } from 'fp-ts/lib/IO';
import { concatAll } from 'fp-ts/lib/Monoid';
import { replicate } from 'fp-ts/lib/ReadonlyArray';
import { getMonoid } from './getMonoid';
import { monoidVoid } from './monoidVoid';

export function replicateIO(n: number, mv: IO<void>): IO<void> {
  return concatAll(getMonoid(monoidVoid))(replicate(n, mv));
}
