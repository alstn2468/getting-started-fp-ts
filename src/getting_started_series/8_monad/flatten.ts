import type { Option } from 'fp-ts/lib/Option';
import { isNone, none } from 'fp-ts/lib/Option';

export const flatten = <A>(mma: Option<Option<A>>): Option<A> =>
  isNone(mma) ? none : mma.value;
