import type { IO } from 'fp-ts/lib/IO';
import { now } from 'fp-ts/lib/Date';
import { pipe } from 'fp-ts/lib/function';
import { chain, map } from 'fp-ts/lib/IO';

export function time<A>(ma: IO<A>): IO<[A, number]> {
  return pipe(
    now,
    chain((start) =>
      pipe(
        ma,
        chain((a: A) =>
          pipe(
            now,
            map((end) => [a, end - start]),
          ),
        ),
      ),
    ),
  );
}
