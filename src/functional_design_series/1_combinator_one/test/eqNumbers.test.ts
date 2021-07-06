import { eqNumbers } from '../eqNumbers';

describe('ReadonlyArray<number> 타입을 위한 Eq 인스턴스 eqNumbers 테스트', () => {
  it('eqNumbers 인스턴스 equals 함수 테스트', () => {
    expect(eqNumbers.equals([1], [1])).toBeTruthy();
    expect(eqNumbers.equals([1, 2], [1, 2])).toBeTruthy();
    expect(eqNumbers.equals([1], [2])).toBeFalsy();
  });
});
