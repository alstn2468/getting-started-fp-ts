import type { Option } from 'fp-ts/lib/Option';
import { isSome, isNone, none, some } from 'fp-ts/lib/Option';
import { flatten } from '../flatten';

describe('Option<Option<A>>를 받아 Option<A>를 반환하는 flatten 함수 테스트', () => {
  let result: Option<number>;
  it('인자로 전달되는 mma가 some인 경우 flatten 함수 테스트', () => {
    result = flatten(some(some(1)));
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some(1));
  });
  it('인자로 전달되는 mma가 none인 경우 flatten 함수 테스트', () => {
    result = flatten(none);
    expect(isNone(result)).toBeTruthy();
    expect(result).toMatchObject(none);
  });
});
