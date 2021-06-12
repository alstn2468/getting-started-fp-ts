import { monoidAny } from '../monoidAny';

describe('Monoid 인터페이스를 구현한 monoidAny 인스턴스 테스트', () => {
  it('monoidAny 인스턴스 concat 함수 테스트', () => {
    expect(monoidAny.concat(false, false)).toBeFalsy();
    expect(monoidAny.concat(true, false)).toBeTruthy();
    expect(monoidAny.concat(true, true)).toBeTruthy();
  });

  it('monoidAny 인스턴스 empty 필드 테스트', () => {
    expect(monoidAny.empty).toBe(false);
  });
});
