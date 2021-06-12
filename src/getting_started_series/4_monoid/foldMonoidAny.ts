import { concatAll } from 'fp-ts/lib/Monoid';
import { monoidAny } from './monoidAny';

export const foldMonoidAny = concatAll(monoidAny);
