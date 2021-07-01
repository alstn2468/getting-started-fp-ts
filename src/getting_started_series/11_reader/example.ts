export const f = (b: boolean): string => (b ? 'true' : 'false');

export const g = (n: number): string => f(n > 2);

export const h = (s: string): string => g(s.length + 1);
