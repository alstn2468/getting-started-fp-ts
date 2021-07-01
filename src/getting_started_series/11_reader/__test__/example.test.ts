import { f, g, h } from '../example';

describe('Reader를 사용하지 않은 f, g, h 함수 테스트', () => {
  it('boolean을 받아 문자열을 반환하는 f 함수 테스트', () => {
    expect(f(true)).toBe('true');
    expect(f(false)).toBe('false');
  });
  it('number를 받아 문자열을 반환하는 g 함수 테스트', () => {
    expect(g(3)).toBe('true');
    expect(g(2)).toBe('false');
    expect(g(1)).toBe('false');
  });
  it('string를 받아 문자열을 반환하는 h 함수 테스트', () => {
    expect(h('aaa')).toBe('true');
    expect(h('aa')).toBe('true');
    expect(h('a')).toBe('false');
  });
});
