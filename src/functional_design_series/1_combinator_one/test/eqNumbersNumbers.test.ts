import { eqNumbersNumbers } from '../eqNumbersNumbers';

describe('ReadonlyArray<ReadonlyArray<number>> 타입을 위한 Eq 인스턴스 eqNumbersNumbers 테스트', () => {
  it('eqNumbersNumbers 인스턴스 equals 함수 테스트', () => {
    expect(eqNumbersNumbers.equals([[1]], [[1]])).toBeTruthy();
    expect(
      eqNumbersNumbers.equals(
        [
          [1, 2],
          [2, 3],
        ],
        [
          [1, 2],
          [2, 3],
        ],
      ),
    ).toBeTruthy();
    expect(eqNumbersNumbers.equals([[1]], [[2]])).toBeFalsy();
  });
});
