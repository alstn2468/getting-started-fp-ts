import type { Option } from 'fp-ts/lib/Option';
import { isSome, isNone, none, some } from 'fp-ts/lib/Option';
import { flattenInverseHead } from '../flattenInverseHead';

describe('flatten을 이용한 Option<number>를 반환하는 flattenInverseHead 함수 테스트', () => {
  let result: Option<number>;
  it('인자로 전달되는 배열이 비어있지 않은 경우 flattenInverseHead 함수 테스트', () => {
    const arr = [2, 4, 6];
    result = flattenInverseHead(arr);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(0.5));
  });
  it('인자로 전달되는 배열이 비어있는 경우 flattenInverseHead 함수 테스트', () => {
    const arr = [0];
    result = flattenInverseHead(arr);
    expect(isNone(result)).toBeTruthy();
    expect(result).toMatchObject(none);
  });
});
