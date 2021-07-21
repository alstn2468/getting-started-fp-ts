import type { IO } from 'fp-ts/lib/IO';
import type { Monad1 } from 'fp-ts/lib/Monad';
import type { Kind, URIS } from 'fp-ts/lib/HKT';

export interface MonadIO<M extends URIS> extends Monad1<M> {
  readonly fromIO: <A>(fa: IO<A>) => Kind<M, A>;
}
