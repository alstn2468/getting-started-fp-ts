// B와 C의 타입이 같을 경우  `f: (a: A) => B`와 `g: (c: C) => D`를 조합할 수 있다.
export function compose<A, B, C>(g: (b: B) => C, f: (a: A) => B): (a: A) => C {
  return (a) => g(f(a));
}
