import type { IO } from 'fp-ts/lib/IO';
import { Monad } from 'fp-ts/lib/IO';

export function ignoreSnd<A>(ma: IO<[A, unknown]>): IO<A> {
  return Monad.map(ma, ([a]) => a);
}
