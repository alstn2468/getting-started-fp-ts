import type { IO } from './IO';
import { map as ioMap } from 'fp-ts/lib/IO';
import { random } from './random';

/** 무작위의 boolean을 반환한다. */
export const randomBool: IO<boolean> = ioMap((n) => n < 0.5)(random);
