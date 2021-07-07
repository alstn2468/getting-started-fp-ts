import { replicateIO } from '../replicateIO';

describe('n개의 IO<void>를 복제하는 replicateIO 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  beforeEach(() => {
    spy.mockClear();
  });
  it('콘솔에 출력을하는 IO<void>가 n번 만큼 실행되는지 테스트', () => {
    replicateIO(3, () => console.log('Hello World!'))();
    expect(console.log).toBeCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
