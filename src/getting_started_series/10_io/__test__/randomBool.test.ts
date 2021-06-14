import { randomBool } from '../randomBool';

describe('실패하지 않는 연산을 표현하는 추상화 IO를 사용한 randomBool함수 테스트', () => {
  let result;
  it('random 함수의 반환값이 0.5로 mocking됐을 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.5);
    result = randomBool();
    expect(result).toBeFalsy();
  });
  it('random 함수의 반환값이 0.49로 mocking됐을 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.49);
    result = randomBool();
    expect(result).toBeTruthy();
  });
});
