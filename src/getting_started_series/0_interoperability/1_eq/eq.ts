export interface Eq<A> {
  /** `x`와 `y`가 같을 경우 `true`를 반환한다. */
  readonly equals: (x: A, y: A) => boolean;
}
