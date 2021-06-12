import { concatAll } from 'fp-ts/lib/Monoid';
import { monoidProduct } from './monoidProduct';

export const foldMonoidProduct = concatAll(monoidProduct);
