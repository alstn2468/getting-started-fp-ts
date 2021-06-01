import { flatten } from 'fp-ts/lib/Array';
import { User } from './user';
import { getFollowers } from './getFollowers';

export const followersOfFollowers = (user: User): Array<User> =>
  flatten(getFollowers(user).map(getFollowers));
