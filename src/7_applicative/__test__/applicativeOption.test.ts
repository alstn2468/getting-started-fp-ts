import { some, none, isSome, isNone } from 'fp-ts/lib/Option';
import { applicativeOption } from '../applicativeOption';

describe('Applicative<F>에서 F가 Option인 Applicative 테스트', () => {
  let result;
  it('A, B 타입 매개변수가 모두 number인 경우 map 함수 테스트 (some)', () => {
    const fa = some(2);
    const f = (n: number): number => n * n;
    result = applicativeOption.map(fa, f);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(4));
  });
  it('A, B 타입 매개변수가 모두 number인 경우 map 함수 테스트 (none)', () => {
    const fa = none;
    const f = (n: number): number => n * n;
    result = applicativeOption.map(fa, f);
    expect(isNone(result)).toBeTruthy();
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 map 함수 테스트 (some)', () => {
    const fa = some(2);
    const f = (n: number): string => n.toString();
    result = applicativeOption.map(fa, f);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some('2'));
  });
  it('A 타입 매개변수가 number인 경우 of 함수 테스트', () => {
    result = applicativeOption.of(1);
    expect(result).toMatchObject(some(1));
  });
  it('A 타입 매개변수가 string인 경우 of 함수 테스트', () => {
    result = applicativeOption.of('1');
    expect(result).toMatchObject(some('1'));
  });
  it('A, B 타입 매개변수가 number인 경우 ap 함수 테스트 (fab = some, fa = some)', () => {
    const fab = some((a: number): number => a * a);
    const fa = some(2);
    result = applicativeOption.ap(fab, fa);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(4));
  });
  it('A, B 타입 매개변수가 number인 경우 ap 함수 테스트 (fab = none, fa = some)', () => {
    const fab = none;
    const fa = some(2);
    result = applicativeOption.ap(fab, fa);
    expect(isNone(result)).toBeTruthy();
  });
  it('A, B 타입 매개변수가 number인 경우 ap 함수 테스트 (fab = some, fa = none)', () => {
    const fab = some((a: number): number => a * a);
    const fa = none;
    result = applicativeOption.ap(fab, fa);
    expect(isNone(result)).toBeTruthy();
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 ap 함수 테스트 (fab = some, fa = some)', () => {
    const fab = some((a: number): string => a.toString());
    const fa = some(2);
    result = applicativeOption.ap(fab, fa);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some('2'));
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 ap 함수 테스트 (fab = none, fa = some)', () => {
    const fab = none;
    const fa = some(2);
    result = applicativeOption.ap(fab, fa);
    expect(isNone(result)).toBeTruthy();
  });
  it('A 타입 매개변수가 number이고 B 타입 매개변수가 string인 경우 ap 함수 테스트 (fab = some, fa = none)', () => {
    const fab = some((a: number): string => a.toString());
    const fa = none;
    result = applicativeOption.ap(fab, fa);
    expect(isNone(result)).toBeTruthy();
  });
});
