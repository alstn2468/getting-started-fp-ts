import type { User } from './user';
import { getFollowers } from './getFollowers';

export const mapFollowersOfFollowers = (user: User): Array<Array<User>> =>
  getFollowers(user).map(getFollowers);
