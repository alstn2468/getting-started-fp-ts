import type { Monoid } from 'fp-ts/lib/Monoid';

/** `void`를 위한 원시적인 `Monoid` 인스턴스 */
export const monoidVoid: Monoid<void> = {
  concat: () => undefined,
  empty: undefined,
};
