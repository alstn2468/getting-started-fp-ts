import { sum } from '../sum';

describe('concatAll, SemigroupSum를 사용한 sum 함수 테스트', () => {
  it('sum함수 테스트', () => {
    expect(sum(0)([1, 2, 3, 4])).toBe(10);
    expect(sum(10)([1, 2, 3, 4])).toBe(20);
  });
});
