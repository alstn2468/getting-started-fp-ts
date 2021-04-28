import { concatAll } from 'fp-ts/lib/Monoid';
import { monoidSum } from './monoidSum';

export const foldMonoidSum = concatAll(monoidSum);
