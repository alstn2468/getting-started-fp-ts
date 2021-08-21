import type { List } from './list';
import { fold } from './list';

export const length = <A>(fa: List<A>): number =>
  fold(
    fa,
    () => 0,
    (_, tail) => 1 + length(tail),
  );
