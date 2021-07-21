import { of } from 'fp-ts/lib/Task';
import { monadIOTask } from '../monadIOTask';

describe('MonadIO를 구현한 MonadIOTask 인스턴스 테스트', () => {
  it('monadIOTask 인스턴스 of 함수 테스트', async () => {
    const result = monadIOTask.of(1);
    expect(await result()).toBe(1);
  });
  it('monadIOTask 인스턴스 map 함수 테스트', async () => {
    const result = monadIOTask.map(of(1), (n) => n * 2);
    expect(await result()).toBe(2);
  });
  it('monadIOTask 인스턴스 ap 함수 테스트', async () => {
    const result = monadIOTask.ap(
      of((n: number) => n * 2),
      of(1),
    );
    expect(await result()).toBe(2);
  });
  it('monadIOTask 인스턴스 chain 함수 테스트', async () => {
    const result = monadIOTask.chain(of(1), (n) => of(n * 2));
    expect(await result()).toBe(2);
  });
  it('monadIOTask 인스턴스 fromIO 함수 테스트', async () => {
    const result = monadIOTask.fromIO(of(1));
    expect(await result()).toBe(1);
  });
});
