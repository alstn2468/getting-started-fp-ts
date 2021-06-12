import { SemigroupProduct } from 'fp-ts/lib/number';
import { concatAll } from 'fp-ts/lib/Semigroup';

export const product = concatAll(SemigroupProduct);
