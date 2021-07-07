export function fib(n: number): number {
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}
