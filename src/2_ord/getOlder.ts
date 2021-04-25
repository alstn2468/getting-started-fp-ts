import type { Ord } from 'fp-ts/lib/Ord';
import { reverse } from 'fp-ts/lib/Ord';
import { byAge } from './byAge';
import { min } from './min';

function max<A>(O: Ord<A>): (x: A, y: A) => A {
  return min(reverse(O));
}

export const getOlder = max(byAge);
