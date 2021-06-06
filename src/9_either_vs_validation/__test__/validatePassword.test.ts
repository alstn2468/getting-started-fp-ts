import type { Either } from 'fp-ts/lib/Either';
import { isLeft, isRight, right } from 'fp-ts/lib/Either';
import { validatePassword } from '../validatePassword';

describe('비밀번호의 유효성을 검증하는 validatePassword 함수 테스트', () => {
  let result: Either<string, string>;
  it('인자로 전달되는 문자열에 대문자가 없을 경우 테스트', () => {
    result = validatePassword('abcdef');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열에 대문자가 1개 있으나 길이가 짧은 경우 테스트', () => {
    result = validatePassword('Abcde');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열에 대문자가 1개 있으나 숫자가 없는 경우 테스트', () => {
    result = validatePassword('Abcdef');
    expect(isLeft(result)).toBeTruthy();
  });
  it('인자로 전달되는 문자열이 모든 유효성을 만족하는 경우 테스트', () => {
    result = validatePassword('Abcdef1');
    expect(isRight(result)).toBeTruthy();
    expect(result).toMatchObject(right('Abcdef1'));
  });
});
