import { isNone, isSome, none, some } from 'fp-ts/lib/Option';
import { lastMonoid } from '../lastMonoid';

describe('두 번째 Some타입을 반환하는 lastMonoid 인스턴스 테스트', () => {
  let result;
  it('lastMonoid 인스턴스 concat 함수 테스트 (none + none)', () => {
    result = lastMonoid.concat(none, none);
    expect(result).toMatchObject(none);
    expect(isNone(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (some + none)', () => {
    result = lastMonoid.concat(some(1), none);
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (none + some)', () => {
    result = lastMonoid.concat(none, some(1));
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (some + some)', () => {
    result = lastMonoid.concat(some(1), some(2));
    expect(result).toMatchObject(some(2));
    expect(isSome(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (some + empty)', () => {
    result = lastMonoid.concat(some(1), lastMonoid.empty);
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (empty + some)', () => {
    result = lastMonoid.concat(lastMonoid.empty, some(1));
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('lastMonoid 인스턴스 concat 함수 테스트 (empty + empty)', () => {
    result = lastMonoid.concat(lastMonoid.empty, lastMonoid.empty);
    expect(result).toMatchObject(none);
    expect(isNone(result)).toBeTruthy();
  });
});
