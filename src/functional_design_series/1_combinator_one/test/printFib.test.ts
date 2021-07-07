import { printFib } from '../printFib';

describe('30에서 35번째 사이의 임의의 피보나치 수열 값을 출력하는 printFib 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  beforeEach(() => {
    spy.mockClear();
  });
  it('Math.random 함수가 최솟값을 반환할 경우 30번째 수열의 값을 출력하는지 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0);
    printFib();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(1346269);
  });
  it('Math.random 함수가 최댓값을 반환할 경우 35번째 수열의 값을 출력하는지 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    printFib();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(14930352);
  });
});
