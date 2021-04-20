import * as S from 'fp-ts/string';
import { getItem } from '../getItem';
import { isSome, isNone, none, some, getEq, Option } from 'fp-ts/Option';

describe('getItem함수 테스트 (동기 부수 효과)', () => {
  window.localStorage.__proto__.getItem = jest.fn((key) => {
    if (key === 'success') return 'success';
    return null;
  });
  let result: Option<string>;
  const E = getEq(S.Eq);
  it('getItem함수가 값을 정상적으로 가져온 경우', () => {
    result = getItem('success')();
    expect(isSome(result)).toBeTruthy();
    expect(E.equals(result, some('success'))).toBeTruthy();
  });

  it('getItem함수가 값을 가져오지 못했을 경우', () => {
    result = getItem('fail')();
    expect(isNone(result)).toBeTruthy();
    expect(E.equals(result, none)).toBeTruthy();
  });
});
