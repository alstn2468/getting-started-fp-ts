import type { Monoid } from './monoid';

/** number 타입의 곱셈 `Monoid` */
export const monoidProduct: Monoid<number> = {
  concat: (x, y) => x * y,
  empty: 1,
};
