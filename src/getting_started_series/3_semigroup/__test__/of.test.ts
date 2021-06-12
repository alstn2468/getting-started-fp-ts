import { getArraySemigroup } from '../getArraySemigroup';
import { of } from '../of';

describe('Free Semigroup 인스턴스에 사용되는 of 함수 테스트', () => {
  it('string 타입의 Semigroup of 함수 테스트', () => {
    expect(
      getArraySemigroup<string>().concat(of('Hello'), of('World!')),
    ).toMatchObject(['Hello', 'World!']);
  });

  it('number 타입의 Semigroup of 함수 테스트', () => {
    expect(getArraySemigroup<number>().concat(of(1), of(2))).toMatchObject([
      1,
      2,
    ]);
  });
});
