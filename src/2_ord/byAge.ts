import type { Ord } from 'fp-ts/lib/Ord';
import { contramap } from 'fp-ts/lib/Ord';
import { ordNumber } from './ordNumber';

type User = {
  name: string;
  age: number;
};

export const byAge: Ord<User> = contramap((user: User) => user.age)(ordNumber);
