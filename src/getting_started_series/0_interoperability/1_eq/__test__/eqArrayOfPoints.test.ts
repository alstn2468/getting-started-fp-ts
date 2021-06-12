import { eqArrayOfPoints } from '../eqArrayOfPoints';

describe('Eq 인터페이스를 구현한 eqArrayOfPoints 인스턴스 테스트', () => {
  it('eqArrayOfPoints 인스턴스 equals 함수 테스트', () => {
    expect(
      eqArrayOfPoints.equals(
        [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
        [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
      ),
    ).toBeTruthy();
    expect(
      eqArrayOfPoints.equals(
        [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
        [
          { x: 2, y: 3 },
          { x: 3, y: 4 },
        ],
      ),
    ).toBeFalsy();
  });
});
