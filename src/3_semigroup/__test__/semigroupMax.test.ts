import { semigroupMax } from '../semigroupMax';

describe('Semigroup 인터페이스를 구현한 semigroupMax 인스턴스 테스트', () => {
  it('semigroupMax 인스턴스 concat 함수 테스트', () => {
    expect(semigroupMax.concat(2, 1)).toBe(2);
  });
});
