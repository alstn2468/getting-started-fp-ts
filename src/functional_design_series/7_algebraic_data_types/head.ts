import type { Option } from './option';
import { some, none } from './option';

export const head = <A>(as: Array<A>): Option<A> => {
  return as.length === 0 ? none : some(as[0]);
};
