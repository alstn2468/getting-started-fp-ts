import { compose } from '../compose';

describe('Typescript에서 카테고리를 표현할 수 있는 간단한 compose 함수 테스트', () => {
  it('f = string => number, g = number => boolean, h = g ∘ f = string => boolean 조합 테스트', () => {
    const f = (s: string) => s.length;
    const g = (n: number) => n > 2;
    const h = compose(g, f);

    expect(h('bye')).toBeTruthy();
    expect(h('hi')).toBeFalsy();
    expect(h('')).toBeFalsy();
  });

  it('f = number => string, g = string => string, h = g ∘ f = number => string 조합 테스트', () => {
    const f = (n: number) => n.toString();
    const g = (s: string) => s.repeat(Number(s));
    const h = compose(g, f);

    expect(h(0)).toBe('');
    expect(h(1)).toBe('1');
    expect(h(2)).toBe('22');
  });
});
