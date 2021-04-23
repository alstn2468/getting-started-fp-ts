import { struct } from 'fp-ts/lib/Eq';
import { Eq } from './eq';
import { eqNumber } from './eqNumber';

type Point = {
  x: number;
  y: number;
};

// export const eqPoint: Eq<Point> = {
//   equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y,
// };
// const eqPoint: Eq<Point> = {
//   equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y),
// };

export const eqPoint: Eq<Point> = struct({
  x: eqNumber,
  y: eqNumber,
});
