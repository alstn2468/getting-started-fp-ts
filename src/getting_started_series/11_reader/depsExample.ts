interface Dependencies {
  i18n: {
    true: string;
    false: string;
  };
}

export const f = (b: boolean, deps: Dependencies): string =>
  b ? deps.i18n.true : deps.i18n.false;

export const g = (n: number, deps: Dependencies): string => f(n > 2, deps);

export const h = (s: string, deps: Dependencies): string =>
  g(s.length + 1, deps);
