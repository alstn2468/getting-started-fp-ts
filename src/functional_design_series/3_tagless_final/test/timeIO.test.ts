import { timeIO } from '../timeIO';
import { of } from 'fp-ts/lib/IO';

describe('MonadIO를 사용해 IO<A>를 받아 실행시간을 측정하는 time 함수 테스트', () => {
  const baseTime = new Date().getTime();
  beforeEach(() => {
    let callCount = 0;
    spyOn(window, 'Date').and.callFake(function () {
      return {
        getTime: () => (callCount++ % 2 ? baseTime + 10 : baseTime),
      };
    });
  });
  it('타입 매개변수 A가 number인 경우 테스트', () => {
    expect(timeIO(of(1))()).toMatchObject([1, 10]);
  });
  it('타입 매개변수 A가 string인 경우 테스트', () => {
    expect(timeIO(of('test'))()).toMatchObject(['test', 10]);
  });
});
