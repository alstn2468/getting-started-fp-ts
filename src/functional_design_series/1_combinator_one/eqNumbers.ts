import type { Eq } from 'fp-ts/lib/Eq';
import { getEq } from './getEq';
import { eqNumber } from './eqNumber';

// 파생된
export const eqNumbers: Eq<ReadonlyArray<number>> = getEq(eqNumber);
