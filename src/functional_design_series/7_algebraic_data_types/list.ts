//               ↓ 타입 인자
export type List<A> =
  | { type: 'Nil' }
  | { type: 'Cons'; head: A; tail: List<A> };
//                                                                     ↑ 재귀

export const fold = <A, R>(
  fa: List<A>,
  onNil: () => R,
  onCons: (head: A, tail: List<A>) => R,
): R => (fa.type === 'Nil' ? onNil() : onCons(fa.head, fa.tail));
