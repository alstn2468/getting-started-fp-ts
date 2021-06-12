import { semigroupSum } from '../semigroupSum';

describe('Semigroup 인터페이스를 구현한 semigroupSum 인스턴스 테스트', () => {
  it('semigroupSum 인스턴스 concat 함수 테스트', () => {
    expect(semigroupSum.concat(1, 10)).toBe(11);
    expect(semigroupSum.concat(2, 10)).toBe(12);
  });
});
