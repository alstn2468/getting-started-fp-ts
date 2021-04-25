import type { Semigroup } from 'fp-ts/lib/Semigroup';
import type { Point } from './semigroupPoint';
import { struct } from 'fp-ts/lib/Semigroup';
import { semigroupPoint } from './semigroupPoint';

type Vector = {
  from: Point;
  to: Point;
};

export const semigroupVector: Semigroup<Vector> = struct({
  from: semigroupPoint,
  to: semigroupPoint,
});
