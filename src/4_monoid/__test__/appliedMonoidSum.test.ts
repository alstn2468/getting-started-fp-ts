import { isNone, isSome, none, some } from 'fp-ts/lib/Option';
import { appliedMonoidSum } from '../appliedMonoidSum';

describe('Option타입을 지원하는 appliedMonoidSum 인스턴스 테스트', () => {
  let result;
  it('appliedMonoidSum 테스트 (none + none)', () => {
    result = appliedMonoidSum.concat(none, none);
    expect(result).toBe(none);
    expect(isNone(result)).toBeTruthy();
  });
  it('appliedMonoidSum 테스트 (some + none)', () => {
    result = appliedMonoidSum.concat(some(1), none);
    expect(result).toBe(none);
    expect(isNone(result)).toBeTruthy();
  });
  it('appliedMonoidSum 테스트 (some + some)', () => {
    result = appliedMonoidSum.concat(some(1), some(2));
    expect(result).toMatchObject(some(3));
    expect(isSome(result)).toBeTruthy();
  });
  it('appliedMonoidSum 테스트 (some + empty)', () => {
    result = appliedMonoidSum.concat(some(1), appliedMonoidSum.empty);
    expect(result).toMatchObject(some(1));
    expect(isSome(result)).toBeTruthy();
  });
  it('appliedMonoidSum 테스트 (empty + empty)', () => {
    result = appliedMonoidSum.concat(
      appliedMonoidSum.empty,
      appliedMonoidSum.empty,
    );
    expect(result).toMatchObject(appliedMonoidSum.empty);
    expect(isSome(result)).toBeTruthy();
  });
});
