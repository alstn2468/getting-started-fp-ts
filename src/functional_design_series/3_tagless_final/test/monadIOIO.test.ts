import { of } from 'fp-ts/lib/IO';
import { monadIOIO } from '../monadIOIO';

describe('MonadIO를 구현한 MonadIOIO 인스턴스 테스트', () => {
  it('monadIOIO 인스턴스 of 함수 테스트', () => {
    const result = monadIOIO.of(1);
    expect(result()).toBe(1);
  });
  it('monadIOIO 인스턴스 map 함수 테스트', () => {
    const result = monadIOIO.map(of(1), (n) => n * 2);
    expect(result()).toBe(2);
  });
  it('monadIOIO 인스턴스 ap 함수 테스트', () => {
    const result = monadIOIO.ap(
      of((n: number) => n * 2),
      of(1),
    );
    expect(result()).toBe(2);
  });
  it('monadIOIO 인스턴스 chain 함수 테스트', () => {
    const result = monadIOIO.chain(of(1), (n) => of(n * 2));
    expect(result()).toBe(2);
  });
  it('monadIOIO 인스턴스 fromIO 함수 테스트', () => {
    const result = monadIOIO.fromIO(of(1));
    expect(result()).toBe(1);
  });
});
