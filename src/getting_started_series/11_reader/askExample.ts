import type { Dependencies2 } from './Dependencies';
import type { Reader } from 'fp-ts/lib/Reader';
import { pipe } from 'fp-ts/lib/function';
import { ask, chain } from 'fp-ts/lib/Reader';

import { f } from './readerDepsExample';

export const g = (n: number): Reader<Dependencies2, string> =>
  pipe(
    ask<Dependencies2>(),
    chain((deps) => f(n > deps.lowerBound)),
  );

export const h = (s: string): Reader<Dependencies2, string> => g(s.length + 1);
