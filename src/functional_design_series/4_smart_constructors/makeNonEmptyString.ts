import type { Option } from 'fp-ts/lib/Option';
import type { NonEmptyString } from './nonEmptyString';
import { none, some } from 'fp-ts/lib/Option';
import { isNonEmptyString } from './isNonEmptyString';

export function makeNonEmptyString(s: string): Option<NonEmptyString> {
  return isNonEmptyString(s) ? some(s) : none;
}
