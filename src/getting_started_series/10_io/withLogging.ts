import type { IO } from 'fp-ts/lib/IO';
import { chain, map } from 'fp-ts/lib/IO';
import { log } from 'fp-ts/lib/Console';

/** 디버깅을 위해 콘솔에 값을 기록한다. */
export const withLogging = <A>(action: IO<A>): IO<A> =>
  chain<A, A>((a) => map(() => a)(log(`Value is: ${a}`)))(action);
