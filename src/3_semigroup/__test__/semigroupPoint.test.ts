import { semigroupPoint } from '../semigroupPoint';

describe('Semigroup 인터페이스를 구현한 semigroupPoint 인스턴스 테스트', () => {
  it('semigroupPoint 인스턴스 concat 함수 테스트', () => {
    expect(
      semigroupPoint.concat({ x: 1, y: 2 }, { x: 2, y: 3 }),
    ).toMatchObject({ x: 3, y: 5 });
  });
});
