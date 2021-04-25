import type { Ord } from 'fp-ts/lib/Ord';
import { fromCompare } from 'fp-ts/lib/Ord';

// export const ordNumber: Ord<number> = {
//   equals: (x, y) => x === y,
//   compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0),
// };

export const ordNumber: Ord<number> = fromCompare((x, y) =>
  x < y ? -1 : x > y ? 1 : 0,
);
