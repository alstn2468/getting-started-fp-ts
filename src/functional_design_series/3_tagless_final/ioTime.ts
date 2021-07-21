import type { IO } from 'fp-ts/lib/IO';
import { now } from 'fp-ts/lib/Date';
import { Monad } from 'fp-ts/lib/IO';

export function time<A>(ma: IO<A>): IO<[A, number]> {
  return Monad.chain(now, (start) =>
    Monad.chain(ma, (a) => Monad.map(now, (end) => [a, end - start])),
  );
}
