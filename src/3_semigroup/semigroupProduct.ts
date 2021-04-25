import type { Semigroup } from './semigroup';

/** 곱셈에서의 숫자 `Semigroup` */
export const semigroupProduct: Semigroup<number> = {
  concat: (x, y) => x * y,
};
