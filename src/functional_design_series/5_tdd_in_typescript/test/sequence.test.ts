import { sequence } from '../sequence';

describe('Promise<T> 배열을 resolve해 Promise<Array<T>>를 만드는 sequence 함수 테스트', () => {
  it('T 타입이 string인 경우 테스트', async () => {
    const promises = [
      new Promise<string>((resolve) => resolve('a')),
      new Promise<string>((resolve) => resolve('b')),
      new Promise<string>((resolve) => resolve('c')),
    ];
    const result = await sequence(promises);
    expect(result).toMatchObject(['a', 'b', 'c']);
  });
});
