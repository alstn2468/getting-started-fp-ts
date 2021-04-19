import { pipe } from 'fp-ts/lib/function';
import { map, takeLeft } from 'fp-ts/lib/Array';

export const hello = (names: string[]) =>
  pipe(
    names,
    map((name) => `Hello ${name}!`),
    takeLeft(1),
    (data) => data.pop(),
  );
