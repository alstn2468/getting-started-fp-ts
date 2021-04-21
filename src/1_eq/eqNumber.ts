import { Eq } from './eq';

export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};
