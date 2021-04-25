import { getFirstSemigroup } from '../getFirstSemigroup';

describe('Semigroup 인터페이스를 구현한 getFirstSemigroup 인스턴스 테스트', () => {
  it('getFirstSemigroup 인스턴스 concat 함수 테스트', () => {
    expect(getFirstSemigroup<number>().concat(1, 10)).toBe(1);
    expect(getFirstSemigroup<string>().concat('a', 'b')).toBe('a');
  });
});
