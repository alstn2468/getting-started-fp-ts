import type { Either } from 'fp-ts/lib/Either';
import { chain } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';
import { minLength } from './minLength';
import { oneCapital } from './oneCapital';
import { oneNumber } from './oneNumber';

export const validatePassword = (s: string): Either<string, string> =>
  pipe(minLength(s), chain(oneCapital), chain(oneNumber));
