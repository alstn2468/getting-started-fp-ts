import { f, g, h } from '../fgh';

describe('프로그래밍 언어에서의 Category 예시 함수 테스트', () => {
  it('문자열의 길이를 반환하는 f 함수 테스트', () => {
    expect(f('bye')).toBe(3);
    expect(f('hi')).toBe(2);
    expect(f('')).toBe(0);
  });
  it('숫자가 2보다 큰 경우 true를 반환하는 g 함수 테스트', () => {
    expect(g(3)).toBeTruthy();
    expect(g(2)).toBeFalsy();
    expect(g(-1)).toBeFalsy();
  });
  it('g 함수와 f 함수를 조합해 h = g ∘ f 등식을 만족하는 h 함수 테스트', () => {
    expect(h('bye')).toBeTruthy();
    expect(h('hi')).toBeFalsy();
    expect(h('')).toBeFalsy();
  });
});
