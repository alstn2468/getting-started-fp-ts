import { semigroupMin } from '../semigroupMin';

describe('Semigroup 인터페이스를 구현한 semigroupMin 인스턴스 테스트', () => {
  it('semigroupMin 인스턴스 concat 함수 테스트', () => {
    expect(semigroupMin.concat(2, 1)).toBe(1);
  });
});
