import type { Either } from 'fp-ts/lib/Either';
import { left, right } from 'fp-ts/lib/Either';

export const minLength = (s: string): Either<string, string> =>
  s.length >= 6 ? right(s) : left('at least 6 characters');
