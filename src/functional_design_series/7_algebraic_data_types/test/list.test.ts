import type { List } from '../list';
import { fold } from '../list';

describe('List의 값을 처리하는 fold 함수 테스트', () => {
  const nillList: List<number> = { type: 'Nil' };
  const consList2: List<number> = { type: 'Cons', head: 1, tail: nillList };
  const consList1: List<number> = { type: 'Cons', head: 2, tail: consList2 };
  const onNil = () => 0;
  const onCons = (head: number, tail: List<number>): number =>
    head + fold(tail, onNil, onCons);
  let result: number;
  it('type이 Nil일때 List의 값을 처리하는 경우', () => {
    result = fold(nillList, onNil, onCons);
    expect(result).toBe(0);
  });
  it('type이 Cons일떄 List의 값을 처리하는 경우', () => {
    result = fold(consList1, onNil, onCons);
    expect(result).toBe(3);
  });
});
