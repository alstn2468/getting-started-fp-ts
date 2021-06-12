import type { Either } from 'fp-ts/lib/Either';
import { isLeft, isRight, right } from 'fp-ts/lib/Either';
import { minLength } from '../minLength';

describe('문자열의 길이가 6보다 큰지 확인하는 minLength 함수 테스트', () => {
  let result: Either<string, string>;
  it('인자로 전달되는 문자열의 길이가 6보다 작을 경우 테스트', () => {
    result = minLength('12345');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열의 길이가 6일 경우 테스트', () => {
    result = minLength('123456');
    expect(isRight(result)).toBeTruthy();
    expect(right('123456')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열의 길이가 6보다 클 경우 테스트', () => {
    result = minLength('1234567');
    expect(isRight(result)).toBeTruthy();
    expect(right('1234567')).toMatchObject(result);
  });
});
