import { applicativeTask } from '../applicativeTask';

describe('Applicative<F>에서 F가 Task인 Applicative 테스트', () => {
  let result;
  it('A, B 타입 매개변수가 모두 number인 경우 map 함수 테스트', async () => {
    const fa = () => new Promise<number>((resolve) => resolve(2));
    const f = (n: number): number => n * n;
    const task = applicativeTask.map(fa, f);
    result = await task();
    expect(result).toBe(4);
  });
  it('A 타입 매개변수가 string이고 B 타입 매개변수가 number인 경우 map 함수 테스트', async () => {
    const fa = () => new Promise<string>((resolve) => resolve('success'));
    const f = (n: string): number => n.length;
    const task = applicativeTask.map(fa, f);
    result = await task();
    expect(result).toBe(7);
  });
  it('A 타입 매개변수가 number인 경우 of 함수 테스트', async () => {
    const task = applicativeTask.of(1);
    result = await task();
    expect(result).toBe(1);
  });
  it('A 타입 매개변수가 string인 경우 of 함수 테스트', async () => {
    const task = applicativeTask.of('success');
    result = await task();
    expect(result).toBe('success');
  });
  it('A, B 타입 매개변수가 모두 number인 경우 ap 함수 테스트', async () => {
    const fab = applicativeTask.of((a: number) => a * a);
    const fa = () => new Promise<number>((resolve) => resolve(2));
    const task = applicativeTask.ap(fab, fa);
    result = await task();
    expect(result).toBe(4);
  });
  it('A 타입 매개변수가 string이고 B 타입 매개변수가 number인 경우 map 함수 테스트', async () => {
    const fab = applicativeTask.of((a: string) => a.length);
    const fa = () => new Promise<string>((resolve) => resolve('success'));
    const task = applicativeTask.ap(fab, fa);
    result = await task();
    expect(result).toBe(7);
  });
});
