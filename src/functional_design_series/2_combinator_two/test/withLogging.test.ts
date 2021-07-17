import { of } from 'fp-ts/lib/IO';
import { withLogging } from '../withLogging';

describe('time 함수를 조합한 withLogging 함수 테스트', () => {
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
  it('타입 매개변수 A가 number인 경우 테스트', () => {
    expect(withLogging(of(1))()).toBe(1);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Result: 1, Elapsed: 10`);
  });
  it('타입 매개변수 A가 string인 경우 테스트', () => {
    expect(withLogging(of('test'))()).toBe('test');
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Result: test, Elapsed: 10`);
  });
});
