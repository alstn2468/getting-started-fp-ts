import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { left, right } from 'fp-ts/lib/Either';

export const validateAge = (s: string): Either<NonEmptyArray<string>, number> =>
  isNaN(+s) ? left(['Invalid age']) : right(+s);
