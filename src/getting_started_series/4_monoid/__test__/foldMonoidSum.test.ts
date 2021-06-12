import { foldMonoidSum } from '../foldMonoidSum';

describe('monoidSum 인스턴스에 concatAll 함수를 사용한 foldMonoidSum 함수 테스트', () => {
  it('foldMonoidSum 함수 테스트', () => {
    expect(foldMonoidSum([1, 2, 3, 4])).toBe(10);
  });
});
