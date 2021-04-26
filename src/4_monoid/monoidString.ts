import type { Monoid } from './monoid';

export const monoidString: Monoid<string> = {
  concat: (x, y) => x + y,
  empty: '',
};
