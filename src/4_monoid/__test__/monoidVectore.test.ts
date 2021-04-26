import { monoidVector } from '../monoidVector';

describe('Monoid 인터페이스를 구현한 monoidVector 인스턴스 테스트', () => {
  it('monoidVector 인스턴스 concat 함수 테스트', () => {
    expect(
      monoidVector.concat(
        { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } },
        { from: { x: 2, y: 3 }, to: { x: 3, y: 4 } },
      ),
    ).toMatchObject({
      from: {
        x: 3,
        y: 5,
      },
      to: {
        x: 5,
        y: 7,
      },
    });
  });

  it('monoidVector 인스턴스 empty 필드 테스트', () => {
    expect(monoidVector.empty).toMatchObject({
      from: { x: 0, y: 0 },
      to: { x: 0, y: 0 },
    });
  });
});
