import type { Option } from 'fp-ts/lib/Option';
import type { Int } from '../int';
import { isSome, isNone, some, none } from 'fp-ts/lib/Option';
import { makeInt } from '../makeInt';

describe('isInt를 이용해 Option<Int>를 반환하는 makeInt 함수 테스트', () => {
  let result: Option<Int>;
  it('isInt가 true를 반환할 경우', () => {
    result = makeInt(1);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(1));
  });
  it('isInt가 false를 반환할 경우', () => {
    result = makeInt(0.1);
    expect(isNone(result)).toBeTruthy();
    expect(result).toMatchObject(none);
  });
});
