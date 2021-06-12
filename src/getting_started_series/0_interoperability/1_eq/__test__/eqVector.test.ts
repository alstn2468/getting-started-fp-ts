import { eqVector } from '../eqVector';

describe('Eq 인터페이스를 구현한 eqVector 인스턴스 테스트', () => {
  it('eqVector 인스턴스 equals 함수 테스트', () => {
    expect(
      eqVector.equals(
        { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } },
        { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } },
      ),
    ).toBeTruthy();
    expect(
      eqVector.equals(
        { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } },
        { from: { x: 2, y: 1 }, to: { x: 2, y: 3 } },
      ),
    ).toBeFalsy();
  });
});
