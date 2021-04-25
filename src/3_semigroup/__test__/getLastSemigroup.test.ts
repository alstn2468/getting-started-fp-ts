import { getLastSemigroup } from '../getLastSemigroup';

describe('Semigroup 인터페이스를 구현한 getLastSemigroup 인스턴스 테스트', () => {
  it('getLastSemigroup 인스턴스 concat 함수 테스트', () => {
    expect(getLastSemigroup<number>().concat(1, 10)).toBe(10);
    expect(getLastSemigroup<string>().concat('a', 'b')).toBe('b');
  });
});
