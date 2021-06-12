import type { Monoid } from './monoid';
import type { Point } from './monoidPoint';
import { struct } from 'fp-ts/lib/Monoid';
import { monoidPoint } from './monoidPoint';

type Vector = {
  from: Point;
  to: Point;
};

export const monoidVector: Monoid<Vector> = struct({
  from: monoidPoint,
  to: monoidPoint,
});
