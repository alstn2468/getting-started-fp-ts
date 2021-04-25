import { semigroupVector } from '../semigroupVector';

describe('Semigroup 인터페이스를 구현한 semigroupVector 인스턴스 테스트', () => {
  it('semigroupVector 인스턴스 concat 함수 테스트', () => {
    expect(
      semigroupVector.concat(
        { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } },
        { from: { x: 2, y: 3 }, to: { x: 3, y: 4 } },
      ),
    ).toMatchObject({ from: { x: 3, y: 5 }, to: { x: 5, y: 7 } });
  });
});
