import type { Eq } from 'fp-ts/lib/Eq';
import { getEq } from './getEq';
import { eqNumbersNumbers } from './eqNumbersNumbers';

// 파생된
export const eqNumbersNumbersNumbers: Eq<
  ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>>
> = getEq(eqNumbersNumbers);
