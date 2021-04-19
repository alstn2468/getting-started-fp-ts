import * as fs from 'fs';
import { IOEither, tryCatch } from 'fp-ts/IOEither';

export function readFileSync(path: string): IOEither<Error, string> {
  return tryCatch(
    () => fs.readFileSync(path, 'utf8'),
    (reason) => new Error(String(reason)),
  );
}
