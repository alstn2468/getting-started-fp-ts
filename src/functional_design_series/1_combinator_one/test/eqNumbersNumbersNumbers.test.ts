import { eqNumbersNumbersNumbers } from '../eqNumbersNumbersNumbers';

describe('ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>> 타입을 위한 Eq 인스턴스 eqNumbersNumbersNumbers 테스트', () => {
  it('eqNumbersNumbersNumbers 인스턴스 equals 함수 테스트', () => {
    expect(eqNumbersNumbersNumbers.equals([[[1]]], [[[1]]])).toBeTruthy();
    expect(
      eqNumbersNumbersNumbers.equals(
        [
          [[1], [2]],
          [[2], [3]],
        ],
        [
          [[1], [2]],
          [[2], [3]],
        ],
      ),
    ).toBeTruthy();
    expect(eqNumbersNumbersNumbers.equals([[[1]]], [[[2]]])).toBeFalsy();
  });
});
