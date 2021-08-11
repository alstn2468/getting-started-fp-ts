import { liftA2 } from '../liftA2';

describe('(A, B) => C 함수를 받아 (Promise<A>, Promise<B>) => Promise<C> 로 들어올리는 함수를 반환하는 liftA2 함수 테스트', () => {
  it('A: string, B: number, C: string인 경우 테스트', async () => {
    const f = (a: string, b: number): string => a + b.toString();
    const liftA2WithFunction = liftA2(f);
    const fa = new Promise<string>((resolve) => resolve('string'));
    const fb = new Promise<number>((resolve) => resolve(1));
    const result = await liftA2WithFunction(fa, fb);
    expect(result).toBe('string1');
  });
});
