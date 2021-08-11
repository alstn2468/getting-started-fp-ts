import { pushPromise } from '../pushPromise';

describe('Promise<Array<T>>에 Promise<T>를 삽입하는 pushPromise 함수 테스트', () => {
  it('T 타입이 string인 경우 테스트', () => {
    const acc = new Promise<Array<string>>((resolve) =>
      resolve(['a', 'b', 'c']),
    );
    const x = new Promise<string>((resolve) => resolve('d'));
    expect(pushPromise(acc, x)).toMatchObject(
      new Promise((resolve) => resolve(['a', 'b', 'c', 'd'])),
    );
  });
});
