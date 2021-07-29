import type { Option } from 'fp-ts/lib/Option';
import type { NonEmptyString } from './nonEmptyString';
import type { Int } from './int';
import { makeNonEmptyString } from './makeNonEmptyString';
import { makeInt } from './makeInt';

export interface Person {
  name: Option<NonEmptyString>;
  age: Option<Int>;
}

export function person(name: string, age: number): Person {
  return { name: makeNonEmptyString(name), age: makeInt(age) };
}
