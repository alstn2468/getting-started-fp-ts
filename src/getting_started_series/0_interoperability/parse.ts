import type { Either } from 'fp-ts/lib/Either';
import { tryCatch } from 'fp-ts/lib/Either';

export function parse(s: string): Either<Error, unknown> {
  return tryCatch(
    () => JSON.parse(s),
    (reason) => new Error(String(reason)),
  );
}
