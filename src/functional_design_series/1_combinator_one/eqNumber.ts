import type { Eq } from 'fp-ts/lib/Eq';

/** `number`을 위한 원시적인 `Eq` 인스턴스 */
export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};
