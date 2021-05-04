import { applicativeArray } from '../applicativeArray';

describe('Applicative<F>에서 F가 Array인 Applicative 테스트', () => {
  let result;
  it('A, B 타입 매개변수가 모두 number인 경우 map 함수 테스트', () => {
    const fa = [1, 2, 3, 4, 5];
    const f = (n: number): number => n * n;
    result = applicativeArray.map(fa, f);
    expect(result).toMatchObject([1, 4, 9, 16, 25]);
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 map 함수 테스트', () => {
    const fa = [1, 2, 3, 4, 5];
    const f = (n: number): string => n.toString();
    result = applicativeArray.map(fa, f);
    expect(result).toMatchObject(['1', '2', '3', '4', '5']);
  });
  it('A 타입 매개변수가 number인 경우 of 함수 테스트', () => {
    result = applicativeArray.of(1);
    expect(result).toMatchObject([1]);
  });
  it('A 타입 매개변수가 string인 경우 of 함수 테스트', () => {
    result = applicativeArray.of('1');
    expect(result).toMatchObject(['1']);
  });
  it('A, B 타입 매개변수가 number인 경우 ap 함수 테스트', () => {
    const fab = [(a: number): number => a + 1, (a: number): number => a * a];
    const fa = [1, 2, 3, 4, 5];
    result = applicativeArray.ap(fab, fa);
    expect(result).toMatchObject([2, 3, 4, 5, 6, 1, 4, 9, 16, 25]);
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 ap 함수 테스트', () => {
    const fab = [
      (a: number): string => a.toString(),
      (a: number): string => a.toString().repeat(a),
    ];
    const fa = [1, 2, 3, 4, 5];
    result = applicativeArray.ap(fab, fa);
    expect(result).toMatchObject([
      '1',
      '2',
      '3',
      '4',
      '5',
      '1',
      '22',
      '333',
      '4444',
      '55555',
    ]);
  });
});
