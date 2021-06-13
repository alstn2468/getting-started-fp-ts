import type { Option } from 'fp-ts/lib/Option';
import type { IO } from './IO';
import { fromNullable } from 'fp-ts/lib/Option';

export const getItem = (key: string): IO<Option<string>> => () =>
  fromNullable(localStorage.getItem(key));

export const setItem = (key: string, value: string): IO<void> => () =>
  localStorage.setItem(key, value);
