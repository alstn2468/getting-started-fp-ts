import { SemigroupSum } from 'fp-ts/lib/number';
import { concatAll } from 'fp-ts/lib/Semigroup';

export const sum = concatAll(SemigroupSum);
