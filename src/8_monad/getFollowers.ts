import type { User } from './user';

export const getFollowers = (user: User): Array<User> => user.followers;
