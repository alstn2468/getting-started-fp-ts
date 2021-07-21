import type { Kind, URIS } from 'fp-ts/lib/HKT';
import type { MonadIO } from './monadIO';
import * as D from 'fp-ts/lib/Date';

export function time<M extends URIS>(
  M: MonadIO<M>,
): <A>(ma: Kind<M, A>) => Kind<M, [A, number]> {
  const now = M.fromIO(D.now); // 들어올리기
  return (ma) =>
    M.chain(now, (start) =>
      M.chain(ma, (a) => M.map(now, (end) => [a, end - start])),
    );
}
