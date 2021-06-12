import { semigroupProduct } from '../semigroupProduct';

describe('Semigroup 인터페이스를 구현한 semigroupProduct 인스턴스 테스트', () => {
  it('semigroupProduct 인스턴스 concat 함수 테스트', () => {
    expect(semigroupProduct.concat(1, 10)).toBe(10);
    expect(semigroupProduct.concat(2, 10)).toBe(20);
  });
});
