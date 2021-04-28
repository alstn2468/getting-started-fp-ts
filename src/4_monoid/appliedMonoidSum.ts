import { Applicative } from 'fp-ts/lib/Option';
import { getApplicativeMonoid } from 'fp-ts/lib/Applicative';

import { monoidSum } from './monoidSum';

export const appliedMonoidSum = getApplicativeMonoid(Applicative)(monoidSum);
