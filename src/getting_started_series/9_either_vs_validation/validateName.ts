import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { left, right } from 'fp-ts/lib/Either';

export const validateName = (
  s: string,
): Either<NonEmptyArray<string>, string> =>
  s.length === 0 ? left(['Invalid name']) : right(s);
