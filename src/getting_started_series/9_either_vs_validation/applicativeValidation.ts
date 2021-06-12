import { getSemigroup } from 'fp-ts/lib/NonEmptyArray';
import { getApplicativeValidation } from 'fp-ts/lib/Either';

export const applicativeValidation = getApplicativeValidation(
  getSemigroup<string>(),
);
