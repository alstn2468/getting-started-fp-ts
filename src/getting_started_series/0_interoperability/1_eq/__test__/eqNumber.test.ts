import { eqNumber } from '../eqNumber';

describe('Eq 인터페이스를 구현한 eqNumber 인스턴스 테스트', () => {
  it('eqNumber 인스턴스 equals 함수 테스트', () => {
    expect(eqNumber.equals(1, 1)).toBeTruthy();
    expect(eqNumber.equals(1, 2)).toBeFalsy();
  });
});
