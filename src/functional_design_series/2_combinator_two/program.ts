import { randomInt } from 'fp-ts/lib/Random';
import { map } from 'fp-ts/lib/IO';
import { withLogging } from './withLogging';

function fib(n: number): number {
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}

export const program = withLogging(map(fib)(randomInt(30, 35)));
