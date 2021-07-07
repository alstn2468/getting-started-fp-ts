import type { IO } from 'fp-ts/lib/IO';
import { chain } from 'fp-ts/lib/IO';
import { pipe } from 'fp-ts/lib/function';
import { fib } from './fib';
import { log } from './log';
import { randomInt } from './randomInt';

/** 임의의 피보나치 수열을 계산하고 결과를 콘솔에 출력하는 함수 */
export const printFib: IO<void> = pipe(
  randomInt(30, 35),
  chain((n) => log(fib(n))),
);
