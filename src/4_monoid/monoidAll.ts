import type { Monoid } from './monoid';

/** boolean타입의 논리곱 monoid */
export const monoidAll: Monoid<boolean> = {
  concat: (x, y) => x && y,
  empty: true,
};
