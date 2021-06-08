import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { pipe } from 'fp-ts/lib/function';
import { mapLeft } from 'fp-ts/lib/Either';

export function lift<E, A>(
  check: (a: A) => Either<E, A>,
): (a: A) => Either<NonEmptyArray<E>, A> {
  return (a) =>
    pipe(
      check(a),
      mapLeft((a) => [a]),
    );
}
