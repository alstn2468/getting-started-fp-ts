import type { Either } from './either';
import { fold, left, right } from './either';

const readFile = (
  filePath: string,
  callback: (err: string, data: string) => string,
) => {
  let err: string | undefined, data: string | undefined;
  if (!filePath.includes('success.txt')) {
    err = `${filePath} is not found.`;
  } else {
    data = 'success';
  }
  return callback(err, data);
}

export const readFileWithEither = (filePath: string) =>
  readFile(filePath, (err, data) => {
    const either: Either<string, string> = err
      ? left(err)
      : right(data.toString());

    return fold(
      either,
      (err) => `Error: ${err}`,
      (data) => `Data: ${data}`,
    );
  });
