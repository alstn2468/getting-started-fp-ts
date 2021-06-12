import type { Option } from 'fp-ts/lib/Option';
import * as N from 'fp-ts/lib/number';
import { isSome, none, some, getEq, isNone } from 'fp-ts/lib/Option';
import { findIndex } from '../findIndex';

describe('findIndex함수 테스트 (Sentinels)', () => {
  let array: number[] = [1, 2, 3, 5];
  let result: Option<number>;
  const E = getEq(N.Eq);
  it('findIndex함수가 존재하는 값을 찾았을 경우', () => {
    result = findIndex(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(0))).toBeTruthy();
  });
  it('findIndex함수가 값을 찾지 못했을 경우', () => {
    result = findIndex(array, (a) => a === 4);
    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
