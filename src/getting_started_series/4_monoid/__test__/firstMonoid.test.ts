import { isNone, isSome, none, some } from 'fp-ts/lib/Option';
import { firstMonoid } from '../firstMonoid';

describe('첫 번째 Some타입을 반환하는 firstMonoid 인스턴스 테스트', () => {
  let result;
  it('firstMonoid 인스턴스 concat 함수 테스트 (none + none)', () => {
    result = firstMonoid.concat(none, none);
    expect(result).toMatchObject(none);
    expect(isNone(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (some + none)', () => {
    result = firstMonoid.concat(some(1), none);
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (none + some)', () => {
    result = firstMonoid.concat(none, some(1));
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (some + some)', () => {
    result = firstMonoid.concat(some(1), some(2));
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (some + empty)', () => {
    result = firstMonoid.concat(some(1), firstMonoid.empty);
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (empty + some)', () => {
    result = firstMonoid.concat(firstMonoid.empty, some(1));
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('firstMonoid 인스턴스 concat 함수 테스트 (empty + empty)', () => {
    result = firstMonoid.concat(firstMonoid.empty, firstMonoid.empty);
    expect(result).toMatchObject(none);
    expect(isNone(result)).toBeTruthy();
  });
});
