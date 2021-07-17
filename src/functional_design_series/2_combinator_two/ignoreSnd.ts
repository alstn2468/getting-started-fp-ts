import type { IO } from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/function';
import { map } from 'fp-ts/lib/IO';

export function ignoreSnd<A>(ma: IO<[A, unknown]>): IO<A> {
  return pipe(
    ma,
    map(([a]) => a),
  );
}
