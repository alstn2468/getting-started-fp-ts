import type { URI } from 'fp-ts/lib/Task';
import type { MonadIO } from './monadIO';
import { Monad, fromIO } from 'fp-ts/lib/Task';

export const monadIOTask: MonadIO<URI> = {
  ...Monad,
  fromIO: fromIO,
};
