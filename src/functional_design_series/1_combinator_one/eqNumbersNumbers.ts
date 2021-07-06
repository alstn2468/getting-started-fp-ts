import type { Eq } from 'fp-ts/lib/Eq';
import { getEq } from './getEq';
import { eqNumbers } from './eqNumbers';

// 파생된
export const eqNumbersNumbers: Eq<ReadonlyArray<ReadonlyArray<number>>> = getEq(
  eqNumbers,
);
