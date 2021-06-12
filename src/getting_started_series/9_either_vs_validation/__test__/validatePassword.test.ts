import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { validatePassword } from '../validatePassword';

describe('sequenceT을 사용해 비밀번호의 유효성을 검증하는 validatePassword 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, string>;
  it('인자로 전달되는 문자열이 모든 유효성을 만족하지 못할 경우 테스트', () => {
    result = validatePassword('a');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(
      left([
        'at least 6 characters',
        'at least one capital letter',
        'at least one number',
      ]),
    );
  });
  it('인자로 전달되는 문자열이 대문자 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('Abcde');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(
      left(['at least 6 characters', 'at least one number']),
    );
  });
  it('인자로 전달되는 문자열에 길이 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('abcdef');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(
      left(['at least one capital letter', 'at least one number']),
    );
  });
  it('인자로 전달되는 문자열에 숫자 포함 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('1');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(
      left(['at least 6 characters', 'at least one capital letter']),
    );
  });
  it('인자로 전달되는 문자열에 숫자 포함, 대문자 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('A1');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least 6 characters']));
  });
  it('인자로 전달되는 문자열에 숫자 포함, 길이 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('abcde1');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least one capital letter']));
  });
  it('인자로 전달되는 문자열에 대문자 포함, 길이 유효성만 만족할 경우 테스트', () => {
    result = validatePassword('Abcdef');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least one number']));
  });
  it('인자로 전달되는 문자열이 모든 유효성을 만족하는 경우 테스트', () => {
    result = validatePassword('Abcdef1');
    expect(isRight(result)).toBeTruthy();
    expect(result).toMatchObject(right('Abcdef1'));
  });
});
