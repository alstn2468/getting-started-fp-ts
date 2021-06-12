import { concatAll } from 'fp-ts/lib/Monoid';
import { monoidAll } from './monoidAll';

export const foldMonoidAll = concatAll(monoidAll);
