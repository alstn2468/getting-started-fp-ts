import type { Option } from 'fp-ts/lib/Option';
import type { NonEmptyString } from '../nonEmptyString';
import { isSome, isNone, some, none } from 'fp-ts/lib/Option';
import { makeNonEmptyString } from '../makeNonEmptyString';

describe('isNonEmptyString를 이용해 Option<NonEmptyString>를 반환하는 makeNonEmptyString 함수 테스트', () => {
  let result: Option<NonEmptyString>;
  it('isNonEmptyString이 true를 반환할 경우', () => {
    result = makeNonEmptyString('success');
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some('success'));
  });
  it('isNonEmptyString이 false를 반환할 경우', () => {
    result = makeNonEmptyString('');
    expect(isNone(result)).toBeTruthy();
    expect(result).toMatchObject(none);
  });
});
