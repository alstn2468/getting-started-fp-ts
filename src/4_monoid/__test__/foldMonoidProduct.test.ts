import { foldMonoidProduct } from '../foldMonoidProduct';

describe('monoidProduct 인스턴스에 concatAll 함수를 사용한 foldMonoidProduct 함수 테스트', () => {
  it('foldMonoidProduct 함수 테스트', () => {
    expect(foldMonoidProduct([1, 2, 3, 4])).toBe(24);
  });
});
