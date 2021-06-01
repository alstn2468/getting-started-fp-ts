import { Apply } from 'fp-ts/lib/Option';
import { SemigroupSum } from 'fp-ts/lib/number';
import { getApplySemigroup } from 'fp-ts/lib/Apply';

export const appliedSemigroup = getApplySemigroup(Apply)(SemigroupSum);
