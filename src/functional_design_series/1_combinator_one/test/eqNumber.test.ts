import { eqNumber } from '../eqNumber';

describe('number 타입을 위한 원시적인 Eq 인스턴스 eqNumber 테스트', () => {
  it('eqNumber 인스턴스 equals 함수 테스트', () => {
    expect(eqNumber.equals(1, 1)).toBeTruthy();
    expect(eqNumber.equals(1, 2)).toBeFalsy();
  });
});
