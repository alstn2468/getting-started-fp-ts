import type { Option } from 'fp-ts/lib/Option';
import { isNone, some, none } from 'fp-ts/lib/Option';

export function optionLift<B, C>(g: (b: B) => C): (fb: Option<B>) => Option<C> {
  return (fb) => (isNone(fb) ? none : some(g(fb.value)));
}
