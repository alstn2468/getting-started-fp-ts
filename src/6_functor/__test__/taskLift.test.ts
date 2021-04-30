import { taskLift } from '../taskLift';

describe('(fb: F<B>) => F<C>에서 F가 Task인 Functor 테스트', () => {
  let result;
  it('B = string, C = number인 경우 테스트', async () => {
    const g = (s: string) => s.length;
    const taskC = taskLift(g)(
      () => new Promise((resolve) => resolve('success')),
    );
    result = await taskC();
    expect(result).toBe(7);
  });
  it('B = boolean, C = string 경우 테스트', async () => {
    const g = (b: boolean) => (b ? 'success' : 'fail');
    const taskC = taskLift(g)(() => new Promise((resolve) => resolve(true)));
    result = await taskC();
    expect(result).toBe('success');
  });
  it('Promise가 reject를 반환할 경우 테스트', async () => {
    const g = (s: string) => s.length;
    const taskC = taskLift(g)(() => new Promise((_, reject) => reject('fail')));
    expect(taskC()).rejects.toMatch('fail');
  });
});
