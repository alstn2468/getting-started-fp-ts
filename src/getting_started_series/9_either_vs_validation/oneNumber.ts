import type { Either } from 'fp-ts/lib/Either';
import { left, right } from 'fp-ts/lib/Either';

export const oneNumber = (s: string): Either<string, string> =>
  /[0-9]/g.test(s) ? right(s) : left('at least one number');
