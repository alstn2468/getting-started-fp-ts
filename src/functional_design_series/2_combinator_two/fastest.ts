import type { IO } from 'fp-ts/lib/IO';
import { Apply } from 'fp-ts/lib/IO';
import { Ord } from 'fp-ts/lib/number';
import { contramap } from 'fp-ts/lib/Ord';
import { getApplySemigroup } from 'fp-ts/lib/Apply';
import { concatAll, min } from 'fp-ts/lib/Semigroup';
import { time } from './time';
import { ignoreSnd } from './ignoreSnd';

export function fastest<A>(head: IO<A>, tail: Array<IO<A>>): IO<A> {
  const ordTuple = contramap(([_, elapsed]: [A, number]) => elapsed)(Ord);
  const semigroupTuple = min(ordTuple);
  const semigroupIO = getApplySemigroup(Apply)(semigroupTuple);
  const fastest = concatAll(semigroupIO)(time(head))(tail.map(time));
  return ignoreSnd(fastest);
}
