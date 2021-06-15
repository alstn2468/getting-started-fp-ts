import { chain, rightIO } from 'fp-ts/lib/IOEither';
import { randomInt } from 'fp-ts/lib/Random';
import { readFileSync } from './readFileSync';

export const randomFile = chain((n) => readFileSync(`${__dirname}/${n}.txt`))(
  rightIO(randomInt(1, 3)),
);
