import type { Option } from 'fp-ts/lib/Option';
import { map } from 'fp-ts/lib/Option';
import { head } from 'fp-ts/lib/Array';
import { inverse } from './inverse';
import { flatten } from './flatten';

export const flattenInverseHead = (arr: Array<number>): Option<number> =>
  flatten(map(inverse)(head(arr)));
