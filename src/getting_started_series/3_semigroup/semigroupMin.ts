import type { Semigroup } from 'fp-ts/lib/Semigroup';
import { Ord } from 'fp-ts/lib/number';
import { min } from 'fp-ts/lib/Semigroup';

/** 2개의 값 중 작은 값을 반환한다. */
export const semigroupMin: Semigroup<number> = min(Ord);
