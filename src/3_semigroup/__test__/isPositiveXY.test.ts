import { isPositiveXY } from '../isPositiveXY';

describe('semigroupPredicate 인스턴스를 이용해 만든 isPositiveXY 테스트', () => {
  it('isPositiveXY 함수 테스트', () => {
    expect(isPositiveXY({ x: 1, y: 1 })).toBeTruthy();
    expect(isPositiveXY({ x: 1, y: -1 })).toBeFalsy();
    expect(isPositiveXY({ x: -1, y: 1 })).toBeFalsy();
    expect(isPositiveXY({ x: -1, y: -1 })).toBeFalsy();
  });
});
