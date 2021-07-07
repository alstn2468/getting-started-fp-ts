import type { IO } from 'fp-ts/lib/IO';
import { Monad } from 'fp-ts/lib/IO';
import { now } from 'fp-ts/lib/Date';
import { log } from 'fp-ts/lib/Console';

export function time<A>(ma: IO<A>): IO<A> {
  return Monad.chain(now, (start) =>
    Monad.chain(ma, (a) =>
      Monad.chain(now, (end) =>
        Monad.map(log(`Elapsed: ${end - start}`), () => a),
      ),
    ),
  );
}
