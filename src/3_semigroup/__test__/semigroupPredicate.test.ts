import { semigroupPredicate } from '../semigroupPredicate';

describe('Semigroup 인터페이스를 구현한 semigroupPredicate 인스턴스 테스트', () => {
  it('semigroupPredicate 인스턴스 concat 함수 테스트', () => {
    expect(
      semigroupPredicate.concat(
        (p) => p.x === 1,
        (p) => p.y === 2,
      )({ x: 1, y: 2 }),
    ).toBeTruthy();
  });
  it('semigroupPredicate 인스턴스 concat 함수 테스트', () => {
    expect(
      semigroupPredicate.concat(
        (p) => p.x === 1,
        (p) => p.y !== 2,
      )({ x: 1, y: 2 }),
    ).toBeFalsy();
  });
});
