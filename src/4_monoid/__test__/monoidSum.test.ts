import { monoidSum } from '../monoidSum';

describe('Monoid 인터페이스를 구현한 monoidSum 인스턴스 테스트', () => {
  it('monoidSum 인스턴스 concat 함수 테스트', () => {
    expect(monoidSum.concat(1, 2)).toBe(3);
  });

  it('monoidSum 인스턴스 empty 필드 테스트', () => {
    expect(monoidSum.empty).toBe(0);
  });
});
