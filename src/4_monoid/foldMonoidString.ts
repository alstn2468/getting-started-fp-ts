import { concatAll } from 'fp-ts/lib/Monoid';
import { monoidString } from './monoidString';

export const foldMonoidString = concatAll(monoidString);
