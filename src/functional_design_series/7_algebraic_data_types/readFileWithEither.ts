import type { Either } from './either';
import { readFile } from 'fs';
import { fold, left, right } from './either';

export const readFileWithEither = (filePath: string) =>
  readFile(filePath, (err, data) => {
    const either: Either<NodeJS.ErrnoException, string> = err
      ? left(err)
      : right(data.toString());

    return fold(
      either,
      (err) => `Error: ${err}`,
      (data) => `Data: ${data}`,
    );
  });
