import { eqVector } from '../eqVector';

describe('Eq 인터페이스를 구현한 eqVector 객체 테스트', () => {
  it('eqVector 객체 equals 메서드 테스트', () => {
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
