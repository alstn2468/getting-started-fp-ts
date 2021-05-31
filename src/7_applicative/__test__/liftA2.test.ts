import { liftA2 } from '../liftA2';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as T from 'fp-ts/lib/Task';

describe('인자가 2개인 들어 올리는 기능을 하는 liftA2 함수 테스트', () => {
  it('F가 Option 타입인 경우 liftA2 함수 테스트', () => {
    const g = (b: string) => (c: number) => String(b) + String(c);
    const fb = O.some('success');
    const fc = O.some(1);
    const result = liftA2(O.Apply)(g)(fb)(fc);
    expect(result).toMatchObject(O.some('success1'));
  });
  it('F가 Array 타입인 경우 liftA2 함수 테스트', () => {
    const g = (b: boolean) => (c: boolean) => b && c;
    const fb = [true, true, false];
    const fc = [true, false, false];
    const result = liftA2(A.Apply)(g)(fb)(fc);
    expect(result).toMatchObject([
      true,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
    ]);
  });
  it('F가 Task 타입인 경우 liftA2 함수 테스트', async () => {
    const g = (b: number) => (c: string) => String(b) + c;
    const fb = () => new Promise<number>((resolve) => resolve(1));
    const fc = () => new Promise<string>((resolve) => resolve('a'));
    const result = await liftA2(T.ApplySeq)(g)(fb)(fc)();
    expect(result).toBe('1a');
  });
});
