import { time } from '../monadIOTime';
import { MonadIO, of as ioOf } from 'fp-ts/lib/IO';
import { MonadTask, of as taskOf } from 'fp-ts/lib/Task';

describe('MonadIO를 받아 Kind<M,A>를 받아 실행시간을 측정하는 time 함수 테스트', () => {
  const baseTime = new Date().getTime();
  beforeEach(() => {
    let callCount = 0;
    spyOn(window, 'Date').and.callFake(function () {
      return {
        getTime: () => (callCount++ % 2 ? baseTime + 10 : baseTime),
      };
    });
  });
  it('Kind<M, A>가 Kind<IO, number>인 경우 테스트', () => {
    expect(time(MonadIO)(ioOf(1))()).toMatchObject([1, 10]);
  });
  it('Kind<M, A>가 Kind<Task, string>인 경우 테스트', async () => {
    expect(await time(MonadTask)(taskOf('test'))()).toMatchObject(['test', 10]);
  });
});
