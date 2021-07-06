import type { Eq } from 'fp-ts/lib/Eq';
import type { User } from './User';
import * as RA from 'fp-ts/lib/ReadonlyArray';
import { eqUser } from './eqUser';

export const eqUsers: Eq<Array<User>> = RA.getEq(eqUser);
