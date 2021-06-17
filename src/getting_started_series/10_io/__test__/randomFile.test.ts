import type { Either } from 'fp-ts/lib/Either';
import * as fs from 'fs';
import { isRight, getOrElse, isLeft } from 'fp-ts/lib/Either';
import { randomFile } from '../randomFile';

describe('임의의 파일을 읽는 randomFile 함수 테스트', () => {
  jest.spyOn(fs, 'readFileSync').mockImplementation((path) => {
    if (path.toString().endsWith('/1.txt')) return 'success';
    throw new Error(`${path} is not found.`);
  });
  let result: Either<Error, string>;
  it('randomInt 함수가 1을 반환해 파일을 성공적으로 읽었을 경우', () => {
    global.Math.random = jest.fn().mockReturnValue(0);
    result = randomFile();
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('success');
  });
  it('randomInt 함수가 1을 반환하지 않아 파일 읽기를 실패한 경우', () => {
    global.Math.random = jest.fn().mockReturnValue(0.9);
    result = randomFile();
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('fail');
  });
});
