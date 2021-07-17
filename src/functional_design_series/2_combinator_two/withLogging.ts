import type { IO } from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/function';
import { chain, map } from 'fp-ts/lib/IO';
import { log } from 'fp-ts/lib/Console';
import { time } from './time';

export function withLogging<A>(ma: IO<A>): IO<A> {
  return pipe(
    time(ma),
    chain(([a, millis]) =>
      map(() => a)(log(`Result: ${a}, Elapsed: ${millis}`)),
    ),
  );
}
