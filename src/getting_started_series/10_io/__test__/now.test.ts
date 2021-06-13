import { now } from '../now';

describe('실패하지 않는 연산을 표현하는 추상화 IO를 사용한 now함수 테스트', () => {
  it('getTime 함수가 mocking된 값을 정상적으로 반환하는지 테스트', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 6, 13, 0, 0, 0, 0));
    expect(now()).toBe(1626102000000);
  });
});
