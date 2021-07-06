import { getEq } from '../getEq';
import * as N from 'fp-ts/lib/number';
import * as S from 'fp-ts/lib/string';

describe('Eq<A> => Eq<ReadonlyArray<A>> 시그니처의 getEq 콤비네이터 테스트', () => {
  const numberEq = getEq(N.Eq);
  const stringEq = getEq(S.Eq);
  it('A타입이 number이며 값이 같은 경우', () => {
    expect(numberEq.equals([1, 2, 3], [1, 2, 3])).toBeTruthy();
  });
  it('A타입이 number이며 값이 다른 경우', () => {
    expect(numberEq.equals([1, 2, 3], [1, 2, 4])).toBeFalsy();
  });
  it('A타입이 number이며 길이와 값 다른 경우', () => {
    expect(numberEq.equals([1, 2, 3], [1, 2])).toBeFalsy();
  });
  it('A타입이 string이며 값이 같은 경우', () => {
    expect(stringEq.equals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBeTruthy();
  });
  it('A타입이 string이며 값이 다른 경우', () => {
    expect(stringEq.equals(['a', 'b', 'c'], ['a', 'b', 'd'])).toBeFalsy();
  });
  it('A타입이 string이며 길이와 값 다른 경우', () => {
    expect(stringEq.equals(['a', 'b', 'c'], ['a', 'b'])).toBeFalsy();
  });
});
