import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { sequenceT } from 'fp-ts/lib/Apply';
import { pipe } from 'fp-ts/lib/function';
import { map } from 'fp-ts/lib/Either';
import { minLengthV } from './minLengthV';
import { oneCapitalV } from './oneCapitalV';
import { oneNumberV } from './oneNumberV';
import { applicativeValidation } from './applicativeValidation';

export function validatePassword(
  s: string,
): Either<NonEmptyArray<string>, string> {
  return pipe(
    sequenceT(applicativeValidation)(
      minLengthV(s),
      oneCapitalV(s),
      oneNumberV(s),
    ),
    map(() => s),
  );
}
