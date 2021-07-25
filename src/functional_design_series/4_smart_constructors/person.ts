import type { NonEmptyString } from './nonEmptyString';
import type { Int } from './int';

interface Person {
  name: NonEmptyString;
  age: Int;
}

export function person(name: NonEmptyString, age: Int): Person {
  return { name, age };
}
