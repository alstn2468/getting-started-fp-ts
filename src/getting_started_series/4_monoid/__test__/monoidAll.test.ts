import { monoidAll } from '../monoidAll';

describe('Monoid 인터페이스를 구현한 monoidAll 인스턴스 테스트', () => {
  it('monoidAll 인스턴스 concat 함수 테스트', () => {
    expect(monoidAll.concat(false, false)).toBeFalsy();
    expect(monoidAll.concat(true, false)).toBeFalsy();
    expect(monoidAll.concat(true, true)).toBeTruthy();
  });

  it('monoidAll 인스턴스 empty 필드 테스트', () => {
    expect(monoidAll.empty).toBe(true);
  });
});
