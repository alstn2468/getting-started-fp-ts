import type { Dependencies2 } from '../Dependencies';
import { g, h } from '../askExample';

describe('ask와 chain 함수를 조합한 의존성이 있는 g 함수 테스트', () => {
  const deps: Dependencies2 = {
    i18n: {
      true: 'true',
      false: 'false',
    },
    lowerBound: 2,
  };
  it('number와 deps를 받아 문자열을 반환하는 g 함수 테스트', () => {
    expect(g(3)(deps)).toBe('true');
    expect(g(2)(deps)).toBe('false');
    expect(g(1)(deps)).toBe('false');
    expect(g(3)({ ...deps, lowerBound: 3 })).toBe('false');
  });
  it('string을 받아 문자열을 반환하는 h 함수 테스트', () => {
    expect(h('aaa')(deps)).toBe('true');
    expect(h('aa')(deps)).toBe('true');
    expect(h('a')(deps)).toBe('false');
    expect(h('aaa')({ ...deps, lowerBound: 4 })).toBe('false');
  });
});
