import { program } from '../program';

describe('실패하지 않는 연산을 표현하는 추상화 IO를 사용한 program 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  beforeEach(() => {
    spy.mockClear();
  });
  it('random 함수의 반환값이 0.5로 mocking됐을 경우 테스트', () => {
    Math.random = jest.fn().mockReturnValue(0.5);
    program();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(false);
  });
  it('random 함수의 반환값이 0.49로 mocking됐을 경우 테스트', () => {
    Math.random = jest.fn().mockReturnValue(0.49);
    program();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
