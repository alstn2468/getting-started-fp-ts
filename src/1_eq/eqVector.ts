import type { Eq } from './eq';
import type { Point } from './eqPoint';
import { struct } from 'fp-ts/lib/Eq';
import { eqPoint } from './eqPoint';

type Vector = {
  from: Point;
  to: Point;
};

// const eqVector: Eq<Vector> = getStructEq({
//   from: eqPoint,
//   to: eqPoint,
// });

export const eqVector: Eq<Vector> = struct({
  from: eqPoint,
  to: eqPoint,
});
