import { monoidPoint } from '../monoidPoint';

describe('Monoid 인터페이스를 구현한 monoidPoint 인스턴스 테스트', () => {
  it('monoidPoint 인스턴스 concat 함수 테스트', () => {
    expect(monoidPoint.concat({ x: 1, y: 2 }, { x: 2, y: 3 })).toMatchObject({
      x: 3,
      y: 5,
    });
  });

  it('monoidPoint 인스턴스 empty 필드 테스트', () => {
    expect(monoidPoint.empty).toMatchObject({ x: 0, y: 0 });
  });
});
