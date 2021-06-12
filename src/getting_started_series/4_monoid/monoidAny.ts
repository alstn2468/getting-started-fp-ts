import type { Monoid } from './monoid';

/** boolean 타입의 논리합 `monoid` */
export const monoidAny: Monoid<boolean> = {
  concat: (x, y) => x || y,
  empty: false,
};
