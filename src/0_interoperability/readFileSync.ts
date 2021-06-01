import * as fs from 'fs';
import type { IOEither } from 'fp-ts/lib/IOEither';
import { tryCatch } from 'fp-ts/lib/IOEither';

export function readFileSync(path: string): IOEither<Error, string> {
  return tryCatch(
    () => fs.readFileSync(path, 'utf8'),
    (reason) => new Error(String(reason)),
  );
}
