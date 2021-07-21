import type { Task } from 'fp-ts/lib/Task';
import { task as M, fromIO } from 'fp-ts/lib/Task';
import * as D from 'fp-ts/lib/Date';

export function time<A>(ma: Task<A>): Task<[A, number]> {
  const now = fromIO(D.now);
  return M.chain(now, (start) =>
    M.chain(ma, (a) => M.map(now, (end) => [a, end - start])),
  );
}
