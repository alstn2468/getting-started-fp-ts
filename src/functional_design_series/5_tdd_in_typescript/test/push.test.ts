import { push } from '../push';

describe('T 타입 배열에 값을 삽입하는 push 함수 테스트', () => {
  it('T타입이 string인 경우 테스트', () => {
    const x = ['a', 'b', 'c'];
    const y = 'd';
    expect(push(x, y)).toMatchObject(['a', 'b', 'c', 'd']);
  });
});
