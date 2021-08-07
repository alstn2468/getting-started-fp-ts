export function liftA2<A, B, C>(
  f: (a: A, b: B) => C
): (fa: Promise<A>, fb: Promise<B>) => Promise<C> {
  return (a, b) => a.then(aa => b.then(bb => f(aa, bb)))
}
