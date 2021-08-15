import { Semigroup } from 'fp-ts/lib/Semigroup';

export const S: Semigroup<string> = {
  concat: (x, y) => x + ' ' + y,
};
