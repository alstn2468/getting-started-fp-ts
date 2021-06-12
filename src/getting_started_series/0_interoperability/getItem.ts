import type { IO } from 'fp-ts/lib/IO';
import type { Option } from 'fp-ts/lib/Option';
import { fromNullable } from 'fp-ts/lib/Option';

export function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key));
}
