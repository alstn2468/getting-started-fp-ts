import { read } from '../read';

jest.mock('readline');

describe('read함수 테스트 (비동기 부수 효과)', () => {
  it('read가 정상적으로 값을 읽었을 경우', async () => {
    const result = await read();
    expect(result).toBe('success');
  });
});
