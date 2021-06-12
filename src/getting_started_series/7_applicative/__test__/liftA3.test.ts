import { liftA3 } from '../liftA3';
import * as O from 'fp-ts/lib/Option';
import * as A from 'fp-ts/lib/Array';
import * as T from 'fp-ts/lib/Task';

describe('인자가 3개인 들어 올리는 기능을 하는 liftA3 함수 테스트', () => {
  it('F가 Option 타입인 경우 liftA3 함수 테스트', () => {
    const g = (b: string) => (c: number) => (d: boolean) =>
      b + String(c) + String(d);
    const fb = O.some('a');
    const fc = O.some(1);
    const fd = O.some(true);
    const result = liftA3(O.Apply)(g)(fb)(fc)(fd);
    expect(result).toMatchObject(O.some('a1true'));
  });
  it('F가 Array 타입인 경우 liftA3 함수 테스트', () => {
    const g = (b: string) => (c: number) => (d: boolean) =>
      b + String(c) + String(d);
    const fb = ['a'];
    const fc = [1, 2, 3];
    const fd = [true, false];
    const result = liftA3(A.Apply)(g)(fb)(fc)(fd);
    expect(result).toMatchObject([
      'a1true',
      'a1false',
      'a2true',
      'a2false',
      'a3true',
      'a3false',
    ]);
  });
  it('F가 Task 타입인 경우 liftA3 함수 테스트', async () => {
    const g = (b: number) => (c: string) => (d: boolean) =>
      String(b) + c + String(d);
    const fb = () => new Promise<number>((resolve) => resolve(1));
    const fc = () => new Promise<string>((resolve) => resolve('a'));
    const fd = () => new Promise<boolean>((resolve) => resolve(true));
    const result = await liftA3(T.ApplySeq)(g)(fb)(fc)(fd)();
    expect(result).toBe('1atrue');
  });
});
