import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import type { Person } from './person';
import { map } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';
import { sequenceT } from 'fp-ts/lib/Apply';
import { toPerson } from './toPerson';
import { validateAge } from './validateAge';
import { validateName } from './validateName';
import { applicativeValidation } from './applicativeValidation';

export function validatePerson(
  name: string,
  age: string,
): Either<NonEmptyArray<string>, Person> {
  return pipe(
    sequenceT(applicativeValidation)(validateName(name), validateAge(age)),
    map(toPerson),
  );
}
