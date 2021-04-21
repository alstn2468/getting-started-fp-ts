import { Either, getOrElse, isLeft, isRight } from 'fp-ts/lib/Either';
import { get } from '../get';

describe('get함수 테스트 (비동기 부수 효과)', () => {
  global.fetch = jest.fn((url) => {
    if (url === 'https://success.com') {
      return Promise.resolve({
        text: () => Promise.resolve('success'),
      }) as Promise<Response>;
    }
    return Promise.reject('fail');
  });
  let result: Either<Error, string>;

  it('get함수가 정상적으로 값을 가져왔을 경우', async () => {
    result = await get('https://success.com')();
    expect(isRight(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('success');
  });
  it('get함수 실행 중 예외가 발생했을 경우', async () => {
    result = await get('https://fail.com')();
    expect(isLeft(result)).toBeTruthy();
    expect(getOrElse(() => 'fail')(result)).toBe('fail');
  });
});
