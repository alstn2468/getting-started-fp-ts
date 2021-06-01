import type { Option } from 'fp-ts/lib/Option';
import { isSome, none, some } from 'fp-ts/lib/Option';
import { mapInverseHead } from '../mapInverseHead';

describe('map을 이용한 Option<Option<number>>를 반환하는 mapInverseHead 함수 테스트', () => {
  let result: Option<Option<number>>;
  it('인자로 전달되는 배열이 비어있지 않은 경우 mapInverseHead 함수 테스트', () => {
    const arr = [2, 4, 6];
    result = mapInverseHead(arr);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(some(0.5)));
  });
  it('인자로 전달되는 배열이 비어있는 경우 mapInverseHead 함수 테스트', () => {
    const arr = [0];
    result = mapInverseHead(arr);
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(none));
  });
});
