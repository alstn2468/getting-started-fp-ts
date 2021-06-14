import type { IO } from 'fp-ts/lib/IO';
import { chain, map } from 'fp-ts/lib/IO';
import { log } from 'fp-ts/lib/Console';

export const withLogging = <A>(action: IO<A>): IO<A> =>
  chain<A, A>((a) => map(() => a)(log(`Value is: ${a}`)))(action);
