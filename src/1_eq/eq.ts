interface Eq<A> {
  /** `x`와 `y`가 같을 경우 `true`를 반환한다. */
  readonly equals: (x: A, y: A) => boolean;
}

export const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};

export function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
  return (a, as) => as.some((item) => E.equals(item, a));
}
