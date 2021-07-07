import { randomInt } from '../randomInt';

describe('low에서 hight 사이의 정수를 반환하는 IO를 반환하는 randomInt 함수 테스트', () => {
  it('Math.random 함수가 최댓값을 반환 했을 때 randomInt 함수 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    expect(randomInt(5, 10)()).toBe(10);
  });
  it('Math.random 함수가 최솟값을 반환 했을 때 randomInt 함수 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0);
    expect(randomInt(5, 10)()).toBe(5);
  });
});
