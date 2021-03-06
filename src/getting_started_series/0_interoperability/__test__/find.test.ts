import type { Option } from 'fp-ts/lib/Option';
import * as N from 'fp-ts/lib/number';
import { isSome, none, some, getEq, isNone } from 'fp-ts/lib/Option';
import { find } from '../find';

describe('find함수 테스트 (undefined와 null)', () => {
  let array: number[] = [1, 2, 3, 5];
  let result: Option<number>;
  const E = getEq(N.Eq);
  it('find함수가 존재하는 값을 찾았을 경우', () => {
    result = find(array, (a) => a === 1);
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some(1))).toBeTruthy();
  });
  it('find함수가 값을 찾지 못했을 경우', () => {
    result = find(array, (a) => a === 4);
    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
