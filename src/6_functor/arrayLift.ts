export function arrayLift<B, C>(g: (b: B) => C): (fb: Array<B>) => Array<C> {
  return (fb) => fb.map(g);
}
