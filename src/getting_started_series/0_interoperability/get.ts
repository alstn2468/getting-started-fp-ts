import type { TaskEither } from 'fp-ts/lib/TaskEither';
import { tryCatch } from 'fp-ts/lib/TaskEither';

export function get(url: string): TaskEither<Error, string> {
  return tryCatch(
    () => fetch(url).then((res) => res.text()),
    (reason) => new Error(String(reason)),
  );
}
