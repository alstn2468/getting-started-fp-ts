import type { Option } from 'fp-ts/lib/Option';
import { map } from 'fp-ts/lib/Option';
import { head } from 'fp-ts/lib/Array';
import { inverse } from './inverse';

export const mapInverseHead = (arr: Array<number>): Option<Option<number>> =>
  map(inverse)(head(arr));
