import type { User } from './user';
import { flatten } from 'fp-ts/lib/Array';
import { getFollowers } from './getFollowers';

export const flattenFollowersOfFollowers = (user: User): Array<User> =>
  flatten(getFollowers(user).map(getFollowers));
