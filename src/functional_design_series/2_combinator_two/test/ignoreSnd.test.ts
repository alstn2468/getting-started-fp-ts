import { of } from 'fp-ts/lib/IO';
import { ignoreSnd } from '../ignoreSnd';

describe('IO<[A, unknown]>이 반환되면 A타입 값만 반환하는 ignoreSnd 함수 테스트', () => {
  it('A타입이 number인 경우', () => {
    expect(ignoreSnd(of([10, 20]))()).toBe(10);
  });
  it('A타입이 string인 경우', () => {
    expect(ignoreSnd(of(['test', 20]))()).toBe('test');
  });
  it('A타입이 Array<number>인 경우', () => {
    expect(ignoreSnd(of([[1, 2, 3], 20]))()).toMatchObject([1, 2, 3]);
  });
});
