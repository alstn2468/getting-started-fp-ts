import { SemigroupSum } from 'fp-ts/lib/number';
import { getApplySemigroup } from 'fp-ts/lib/Apply';
import { Apply } from 'fp-ts/lib/Option';

export const appliedSemigroup = getApplySemigroup(Apply)(SemigroupSum);
