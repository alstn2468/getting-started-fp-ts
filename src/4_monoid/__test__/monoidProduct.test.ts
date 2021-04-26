import { monoidProduct } from '../monoidProduct';

describe('Monoid 인터페이스를 구현한 monoidProduct 인스턴스 테스트', () => {
  it('monoidProduct 인스턴스 concat 함수 테스트', () => {
    expect(monoidProduct.concat(10, 20)).toBe(200);
  });

  it('monoidProduct 인스턴스 empty 필드 테스트', () => {
    expect(monoidProduct.empty).toBe(1);
  });
});
