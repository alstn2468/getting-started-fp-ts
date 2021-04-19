import { Option, fromNullable } from 'fp-ts/Option';

export function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
  return fromNullable(as.find(predicate));
}
