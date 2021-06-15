import type { IOEither } from 'fp-ts/lib/IOEither';
import { toError } from 'fp-ts/lib/Either';
import { tryCatch } from 'fp-ts/lib/IOEither';
import * as fs from 'fs';

export const readFileSync = (path: string): IOEither<Error, string> =>
  tryCatch(() => fs.readFileSync(path, 'utf8'), toError);
