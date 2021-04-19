import { Option, fromNullable } from 'fp-ts/Option';
import { IO } from 'fp-ts/IO';

export function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key));
}
