import type { IO } from 'fp-ts/lib/IO';
import { Monad } from 'fp-ts/lib/IO';
import { log } from 'fp-ts/lib/Console';
import { time } from './time';

export function withLogging<A>(ma: IO<A>): IO<A> {
  return Monad.chain(time(ma), ([a, millis]) =>
    Monad.map(log(`Result: ${a}, Elapsed: ${millis}`), () => a),
  );
}
