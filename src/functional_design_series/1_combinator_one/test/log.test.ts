import { log } from '../log';

describe('IO를 반환하는 log 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  beforeEach(() => {
    spy.mockClear();
  });
  it('입력으로 전달된 값이 정상적으로 콘솔에 출력되는지 테스트', () => {
    log('Hello World!')();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
