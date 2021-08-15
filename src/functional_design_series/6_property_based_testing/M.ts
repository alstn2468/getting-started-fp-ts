import type { Monoid } from 'fp-ts/lib/Monoid';
import { S } from './S';

export const M: Monoid<string> = {
  ...S,
  empty: '',
};
