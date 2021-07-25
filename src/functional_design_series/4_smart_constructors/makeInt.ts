import type { Option } from 'fp-ts/lib/Option';
import type { Int } from './int';
import { none, some } from 'fp-ts/lib/Option';
import { isInt } from './isInt';

export function makeInt(n: number): Option<Int> {
  return isInt(n) ? some(n) : none;
}
