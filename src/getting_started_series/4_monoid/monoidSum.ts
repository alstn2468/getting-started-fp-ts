import type { Monoid } from './monoid';

/** number 타입의 덧셈 `Monoid` */
export const monoidSum: Monoid<number> = {
  concat: (x, y) => x + y,
  empty: 0,
};
