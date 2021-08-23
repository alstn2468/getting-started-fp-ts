import type { List } from '../list';
import { length } from '../length';

describe('List의 길이를 반환하는 length 함수 테스트', () => {
  const emptyList: List<number> = { type: 'Nil' };
  const node2: List<number> = { type: 'Cons', head: 2, tail: emptyList };
  const node1: List<number> = { type: 'Cons', head: 1, tail: node2 };
  const nonEmptyList: List<number> = { type: 'Cons', head: 0, tail: node1 };
  let result: number;
  it('List가 비어있는 경우 테스트', () => {
    result = length(emptyList);
    expect(result).toBe(0);
  });
  it('List가 비어있지 않은 경우 테스트', () => {
    result = length(nonEmptyList);
    expect(result).toBe(3);
  });
});
