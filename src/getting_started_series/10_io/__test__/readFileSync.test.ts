import type { Either } from 'fp-ts/lib/Either';
import * as fs from 'fs';
import { isRight, getOrElse, isLeft } from 'fp-ts/lib/Either';
import { readFileSync } from '../readFileSync';

describe('tryCatch를 이용해 IOEither를 반환하는 readFileSync함수 테스트', () => {
  jest.spyOn(fs, 'readFileSync').mockImplementation((path) => {
    if (path === 'success.txt') return 'success';
    throw new Error(`${path} is not found.`);
  });
  let result: Either<Error, string>;
  it('readFileSync가 정상적으로 값을 가져왔을 경우', () => {
    result = readFileSync('success.txt')();
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('success');
  });
  it('readFileSync함수 실행 중 예외가 발생했을 경우', () => {
    result = readFileSync('fail.txt')();
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('fail');
  });
});
