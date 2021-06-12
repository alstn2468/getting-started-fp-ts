import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { validateAge } from '../validateAge';

describe('입력으로 받은 문자열이 유효한 숫자인지 확인하는 validateAge 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, number>;
  it('인자로 전달되는 문자열이 숫자가 아닌 경우 테스트', () => {
    result = validateAge('abcde');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['Invalid age']));
  });
  it('인자로 전달되는 문자열이 양수인 경우 테스트', () => {
    result = validateAge('20');
    expect(isRight(result)).toBeTruthy();
    expect(result).toMatchObject(right(20));
  });
  it('인자로 전달되는 문자열이 음수인 경우 테스트', () => {
    result = validateAge('-20');
    expect(isRight(result)).toBeTruthy();
    expect(result).toMatchObject(right(-20));
  });
});
