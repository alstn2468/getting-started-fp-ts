import type { Eq } from 'fp-ts/lib/Eq';
import type { User } from './User';
import { contramap } from 'fp-ts/lib/Eq';
import { pipe } from 'fp-ts/lib/function';
import * as N from 'fp-ts/lib/number';

export const eqUser: Eq<User> = pipe(
  N.Eq,
  contramap((user: User) => user.id),
);
