import type { Semigroup } from './semigroup';

/** number 타입의 곱셈 `Semigroup` */
export const semigroupProduct: Semigroup<number> = {
  concat: (x, y) => x * y,
};
