import type { User } from './user';
import { chain } from 'fp-ts/lib/Array';
import { getFollowers } from './getFollowers';

export const followersOfFollowers = (user: User): Array<User> =>
  chain(getFollowers)(getFollowers(user));
