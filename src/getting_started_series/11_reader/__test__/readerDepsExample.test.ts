import type { Dependencies } from '../Dependencies';
import { f, g, h } from '../readerDepsExample';

describe('Reader를 사용하는 의존성이 있는 f, g, h 함수 테스트', () => {
  const deps: Dependencies = {
    i18n: {
      true: 'true',
      false: 'false',
    },
  };
  it('boolean와 deps를 받아 문자열을 반환하는 f 함수 테스트', () => {
    expect(f(true)(deps)).toBe('true');
    expect(f(false)(deps)).toBe('false');
  });
  it('number와 deps를 받아 문자열을 반환하는 g 함수 테스트', () => {
    expect(g(3)(deps)).toBe('true');
    expect(g(2)(deps)).toBe('false');
    expect(g(1)(deps)).toBe('false');
  });
  it('string과 deps를 받아 문자열을 반환하는 h 함수 테스트', () => {
    expect(h('aaa')(deps)).toBe('true');
    expect(h('aa')(deps)).toBe('true');
    expect(h('a')(deps)).toBe('false');
  });
});
