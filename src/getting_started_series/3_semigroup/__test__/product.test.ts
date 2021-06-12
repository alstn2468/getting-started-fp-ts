import { product } from '../product';

describe('concatAll, SemigroupProduct를 사용한 product 함수 테스트', () => {
  it('product함수 테스트', () => {
    expect(product(1)([1, 2, 3, 4])).toBe(24);
    expect(product(10)([1, 2, 3, 4])).toBe(240);
  });
});
