import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { oneNumberV } from '../oneNumberV';

describe('문자열에 숫자가 적어도 하나 있는지 확인하는 oneNumberV 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, string>;
  it('인자로 전달되는 문자열에 숫자가 없을 경우 테스트', () => {
    result = oneNumberV('ABCDE');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least one number']));
  });
  it('인자로 전달되는 문자열에 숫자가 1개 있을 경우 테스트', () => {
    result = oneNumberV('ABCDE1');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCDE1')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열에 숫자가 1개보다 많을 경우 테스트', () => {
    result = oneNumberV('ABCD12');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCD12')).toMatchObject(result);
  });
});
