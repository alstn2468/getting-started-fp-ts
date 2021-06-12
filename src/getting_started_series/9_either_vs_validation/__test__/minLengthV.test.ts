import { Either, left } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right } from 'fp-ts/lib/Either';
import { minLengthV } from '../minLengthV';

describe('문자열의 길이가 6보다 큰지 확인하는 minLengthV 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, string>;
  it('인자로 전달되는 문자열의 길이가 6보다 작을 경우 테스트', () => {
    result = minLengthV('12345');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least 6 characters']));
  });
  it('인자로 전달되는 문자열의 길이가 6일 경우 테스트', () => {
    result = minLengthV('123456');
    expect(isRight(result)).toBeTruthy();
    expect(right('123456')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열의 길이가 6보다 클 경우 테스트', () => {
    result = minLengthV('1234567');
    expect(isRight(result)).toBeTruthy();
    expect(right('1234567')).toMatchObject(result);
  });
});
