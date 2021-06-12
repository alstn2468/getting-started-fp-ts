import type { Either } from 'fp-ts/lib/Either';
import { isLeft, isRight, right } from 'fp-ts/lib/Either';
import { oneNumber } from '../oneNumber';

describe('문자열에 숫자가 적어도 하나 있는지 확인하는 oneNumber 함수 테스트', () => {
  let result: Either<string, string>;
  it('인자로 전달되는 문자열에 숫자가 없을 경우 테스트', () => {
    result = oneNumber('ABCDE');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열에 숫자가 1개 있을 경우 테스트', () => {
    result = oneNumber('ABCDE1');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCDE1')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열에 숫자가 1개보다 많을 경우 테스트', () => {
    result = oneNumber('ABCD12');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCD12')).toMatchObject(result);
  });
});
