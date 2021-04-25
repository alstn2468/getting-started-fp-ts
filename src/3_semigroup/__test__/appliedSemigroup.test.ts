import { isNone, isSome, none, some } from 'fp-ts/lib/Option';
import { appliedSemigroup } from '../appliedSemigroup';

describe('Option타입을 지원하는 appliedSemigroup 인스턴스 테스트', () => {
  let result;
  it('appliedSemigroup 테스트 (some + none)', () => {
    result = appliedSemigroup.concat(some(1), none);
    expect(result).toBe(none);
    expect(isNone(result)).toBeTruthy();
  });
  it('appliedSemigroup 테스트 (some + some)', () => {
    result = appliedSemigroup.concat(some(1), some(2));
    expect(result).toMatchObject(some(3));
    expect(isSome(result)).toBeTruthy();
  });
});
