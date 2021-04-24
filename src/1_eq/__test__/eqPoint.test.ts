import { eqPoint } from '../eqPoint';

describe('Eq 인터페이스를 구현한 eqPoint 인스턴스 테스트', () => {
  it('eqPoint 인스턴스 equals 함수 테스트', () => {
    expect(eqPoint.equals({ x: 1, y: 2 }, { x: 1, y: 2 })).toBeTruthy();
    expect(eqPoint.equals({ x: 1, y: 2 }, { x: 2, y: 1 })).toBeFalsy();
  });
});
