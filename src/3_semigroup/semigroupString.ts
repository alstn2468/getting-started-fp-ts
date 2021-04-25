import type { Semigroup } from './semigroup';

export const semigroupString: Semigroup<string> = {
  concat: (x, y) => x + y,
};
