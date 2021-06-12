import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { validateName } from '../validateName';

describe('입력으로 받은 문자열이 유효한 이름인지 확인하는 validateName 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, string>;
  it('인자로 전달되는 문자열이 빈 문자열인 경우 테스트', () => {
    result = validateName('');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['Invalid name']));
  });
  it('인자로 전달되는 문자열이 비어있지 않은 경우 테스트', () => {
    result = validateName('test');
    expect(isRight(result)).toBeTruthy();
    expect(right('test')).toMatchObject(result);
  });
});
