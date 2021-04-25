import type { Eq } from './eq';
import type { Point } from './eqPoint';
import { getEq } from 'fp-ts/lib/Array';
import { eqPoint } from './eqPoint';

export const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint);
