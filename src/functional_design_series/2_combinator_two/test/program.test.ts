import { program } from '../program';

describe('30에서 35번째 사이의 랜덤한 피보나치 수를 반환하는 program 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  const baseTime = new Date().getTime();
  beforeEach(() => {
    let callCount = 0;
    spyOn(window, 'Date').and.callFake(function () {
      return {
        getTime: () => (callCount++ % 2 ? baseTime + 10 : baseTime),
      };
    });
    spy.mockClear();
  });
  it('Math.random 함수가 최소값을 반환할 경우 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0);
    expect(program()).toBe(1346269);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Result: 1346269, Elapsed: 10`);
  });
  it('Math.random 함수가 최대값을 반환할 경우 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    expect(program()).toBe(14930352);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Result: 14930352, Elapsed: 10`);
  });
});
