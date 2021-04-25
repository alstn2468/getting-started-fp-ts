import type { Semigroup } from 'fp-ts/lib/Semigroup';
import type { Point } from './semigroupPoint';
import { getSemigroup } from 'fp-ts/lib/function';
import { SemigroupAll } from 'fp-ts/lib/boolean';

/** `SemigroupAll`은 결합 된 boolean Semigroup입니다. */
export const semigroupPredicate: Semigroup<
  (p: Point) => boolean
> = getSemigroup(SemigroupAll)<Point>();
