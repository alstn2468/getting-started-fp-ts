import type { Person } from './person';

export const toPerson = ([name, age]: [string, number]): Person => ({
  name,
  age,
});
