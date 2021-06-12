export function f(s: string): number {
  return s.length;
}

export function g(n: number): boolean {
  return n > 2;
}

// h = g ∘ f
export function h(s: string): boolean {
  return g(f(s));
}
