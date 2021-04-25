import { getArraySemigroup } from '../getArraySemigroup';

describe('Semigroup 인터페이스를 구현한 getArraySemigroup 인스턴스 테스트', () => {
  it('getArraySemigroup 인스턴스 concat 함수 테스트 (string 타입)', () => {
    expect(
      getArraySemigroup<string>().concat(['Hello'], ['World!']),
    ).toMatchObject(['Hello', 'World!']);
  });
  it('getArraySemigroup 인스턴스 concat 함수 테스트 (number 타입)', () => {
    expect(getArraySemigroup<number>().concat([1, 2], [3, 4])).toMatchObject([
      1,
      2,
      3,
      4,
    ]);
  });
});
