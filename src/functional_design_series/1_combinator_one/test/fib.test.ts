import { fib } from '../fib';

describe('피보나치 수열의 n번째 값을 반환하는 fib 함수 테스트', () => {
  it('n이 1일 경우 fib 함수 테스트', () => {
    expect(fib(1)).toBe(1);
  });
  it('n이 2일 경우 fib 함수 테스트', () => {
    expect(fib(2)).toBe(2);
  });
  it('n이 3일 경우 fib 함수 테스트', () => {
    expect(fib(3)).toBe(3);
    expect(fib(3)).toBe(fib(1) + fib(2));
  });
  it('n이 10일 경우 fib 함수 테스트', () => {
    expect(fib(10)).toBe(89);
    expect(fib(10)).toBe(fib(8) + fib(9));
  });
});
