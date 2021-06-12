import type { Semigroup } from 'fp-ts/lib/Semigroup';
import { struct } from 'fp-ts/lib/Semigroup';
import { semigroupSum } from './semigroupSum';

export type Point = {
  x: number;
  y: number;
};

// export const semigroupPoint: Semigroup<Point> = {
//   concat: (p1, p2) => ({
//     x: semigroupSum.concat(p1.x, p2.x),
//     y: semigroupSum.concat(p1.y, p2.y),
//   }),
// };

export const semigroupPoint: Semigroup<Point> = struct({
  x: semigroupSum,
  y: semigroupSum,
});
