import { TaskEither, tryCatch } from 'fp-ts/TaskEither';

export function get(url: string): TaskEither<Error, string> {
  return tryCatch(
    () => fetch(url).then((res) => res.text()),
    (reason) => new Error(String(reason)),
  );
}
