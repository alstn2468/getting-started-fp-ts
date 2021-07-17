import { of } from 'fp-ts/lib/IO';
import { fastest } from '../fastest';

describe('여러개의 IO 중 가장 빨리 실행된 것을 반환하는 fastest 함수 테스트', () => {
  const baseTime = new Date().getTime();
  it('IO<A>타입이 IO<number>일 경우 테스트 (처음 실행된 것이 가장 빠른 경우)', () => {
    let callCount = 0;
    spyOn(window, 'Date').and.callFake(function () {
      return {
        getTime: () => (callCount++ % 2 ? baseTime + callCount : baseTime),
      };
    });
    expect(fastest(of(30), [of(20), of(10)])()).toBe(30);
  });
  it('IO<A>타입이 IO<number>일 경우 테스트 (모두 동일하게 실행된 경우)', () => {
    let callCount = 0;
    spyOn(window, 'Date').and.callFake(function () {
      return {
        getTime: () => (callCount++ % 2 ? baseTime + 10 : baseTime),
      };
    });
    expect(fastest(of(10), [of(20), of(30)])()).toBe(10);
  });
});
