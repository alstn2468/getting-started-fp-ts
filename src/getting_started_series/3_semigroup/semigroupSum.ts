import type { Semigroup } from './semigroup';

/** number 타입의 덧셈 `Semigroup` */
export const semigroupSum: Semigroup<number> = {
  concat: (x, y) => x + y,
};
