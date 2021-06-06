import type { Either } from 'fp-ts/lib/Either';
import { left, right } from 'fp-ts/lib/Either';

export const oneCapital = (s: string): Either<string, string> =>
  /[A-Z]/g.test(s) ? right(s) : left('at least one capital letter');
