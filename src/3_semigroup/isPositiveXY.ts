import type { Point } from './semigroupPoint';
import { semigroupPredicate } from './semigroupPredicate';

const isPositiveX = (p: Point): boolean => p.x >= 0;
const isPositiveY = (p: Point): boolean => p.y >= 0;

export const isPositiveXY = semigroupPredicate.concat(isPositiveX, isPositiveY);
