import type { Either } from 'fp-ts/lib/Either';
import { isLeft, isRight, right } from 'fp-ts/lib/Either';
import { oneCapital } from '../oneCapital';

describe('문자열에 대문자가 적어도 하나 있는지 확인하는 oneCapital 함수 테스트', () => {
  let result: Either<string, string>;
  it('인자로 전달되는 문자열에 대문자가 없을 경우 테스트', () => {
    result = oneCapital('abcde');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열에 대문자가 1개 있을 경우 테스트', () => {
    result = oneCapital('Abcde');
    expect(isRight(result)).toBeTruthy();
    expect(right('Abcde')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열에 대문자 1개보다 많을 경우 테스트', () => {
    result = oneCapital('ABCDE');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCDE')).toMatchObject(result);
  });
});
