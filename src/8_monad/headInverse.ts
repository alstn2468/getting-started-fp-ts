import type { Option } from 'fp-ts/lib/Option';
import { head } from 'fp-ts/lib/Array';
import { chain } from 'fp-ts/lib/Option';
import { inverse } from './inverse';

export const headInverse = (arr: Array<number>): Option<number> =>
  chain(inverse)(head(arr));
