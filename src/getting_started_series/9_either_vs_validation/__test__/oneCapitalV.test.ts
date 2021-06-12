import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { oneCapitalV } from '../oneCapitalV';

describe('문자열에 대문자가 적어도 하나 있는지 확인하는 oneCapitalV 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, string>;
  it('인자로 전달되는 문자열에 대문자가 없을 경우 테스트', () => {
    result = oneCapitalV('abcde');
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['at least one capital letter']));
  });
  it('인자로 전달되는 문자열에 대문자가 1개 있을 경우 테스트', () => {
    result = oneCapitalV('Abcde');
    expect(isRight(result)).toBeTruthy();
    expect(right('Abcde')).toMatchObject(result);
  });
  it('인자로 전달되는 문자열에 대문자 1개보다 많을 경우 테스트', () => {
    result = oneCapitalV('ABCDE');
    expect(isRight(result)).toBeTruthy();
    expect(right('ABCDE')).toMatchObject(result);
  });
});
