import type { Monoid } from './monoid';
import { struct } from 'fp-ts/lib/Monoid';
import { monoidSum } from './monoidSum';

export type Point = {
  x: number;
  y: number;
};

export const monoidPoint: Monoid<Point> = struct({
  x: monoidSum,
  y: monoidSum,
});
