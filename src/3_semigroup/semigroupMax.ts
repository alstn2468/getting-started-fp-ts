import type { Semigroup } from 'fp-ts/lib/Semigroup';
import { Ord } from 'fp-ts/lib/number';
import { max } from 'fp-ts/lib/Semigroup';

/** 2개의 값 중 큰 값을 반환한다.  */
export const semigroupMax: Semigroup<number> = max(Ord);
