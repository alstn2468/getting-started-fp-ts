import type { URI } from 'fp-ts/lib/IO';
import type { MonadIO } from './monadIO';
import { Monad } from 'fp-ts/lib/IO';
import { identity } from 'fp-ts/lib/function';

export const monadIOIO: MonadIO<URI> = {
  ...Monad,
  fromIO: identity,
};
