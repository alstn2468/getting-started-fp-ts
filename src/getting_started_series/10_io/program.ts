import type { IO } from './IO';
import { chain as ioChain } from 'fp-ts/lib/IO';
import { log } from './log';
import { randomBool } from './randomBool';

/** 무작위의 boolean을 콘솔에 출력한다. */
export const program: IO<void> = ioChain(log)(randomBool);
