import { eqNumber } from '../eqNumber';

describe('eqNumber 함수 테스트', () => {
  it('eqNumber 객체 equals 메서드 테스트', () => {
    expect(eqNumber.equals(1, 1)).toBeTruthy();
    expect(eqNumber.equals(1, 2)).toBeFalsy();
  });
});
