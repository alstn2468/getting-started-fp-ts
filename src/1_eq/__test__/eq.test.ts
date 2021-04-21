import { elem, eqNumber } from '../eq';

describe('타입스크립트로 구현한 Eq 인터페이스 테스트', () => {
  it('eqNumber 객체 equals 메서드 테스트', () => {
    expect(eqNumber.equals(1, 1)).toBeTruthy();
    expect(eqNumber.equals(1, 2)).toBeFalsy();
  });

  it('elem 함수 테스트 (배열의 원소에 같은 값이 있는 경우)', () => {
    expect(elem(eqNumber)(1, [1, 2, 3])).toBeTruthy();
  });

  it('elem 함수 테스트 (배열의 원소에 같은 값이 없는 경우)', () => {
    expect(elem(eqNumber)(4, [1, 2, 3])).toBeFalsy();
  });
});
