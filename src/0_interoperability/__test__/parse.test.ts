import { isLeft, isRight, getOrElse } from 'fp-ts/Either';
import { parse } from '../parse';

describe('parse함수 테스트 (예외)', () => {
  const success = '{"a": 1, "b": 2}';
  const fail = '{"a": 1, "b"}';
  let result;
  it('parse함수가 정상적으로 실행됐을 경우', () => {
    result = parse(success);
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => ({ error: true }))(result)).toMatchObject({
      a: 1,
      b: 2,
    });
  });
  it('parse함수 실행 중 예외가 발생했을 경우', () => {
    result = parse(fail);
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => ({ a: 1 }))(result)).toMatchObject({
      a: 1,
    });
  });
});
