import { random } from '../random';

describe('실패하지 않는 연산을 표현하는 추상화 IO를 사용한 random함수 테스트', () => {
  let result;
  it('Math.random 함수가 mocking된 값을 정상적으로 반환하는지 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.5);
    result = random();
    expect(result).toBe(0.5);
  });
});
