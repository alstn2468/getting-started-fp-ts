import { elem } from '../elem';
import { eqNumber } from '../eqNumber';

describe('elem 함수 테스트', () => {
  it('eqNumber를 이용한 elem 함수 테스트 (배열의 원소에 같은 값이 있는 경우)', () => {
    expect(elem(eqNumber)(1, [1, 2, 3])).toBeTruthy();
  });
  it('eqNumber를 이용한 elem 함수 테스트 (배열의 원소에 같은 값이 없는 경우)', () => {
    expect(elem(eqNumber)(4, [1, 2, 3])).toBeFalsy();
  });
});
