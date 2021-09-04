export type Either<L, A> =
  | { type: 'Left'; left: L } // 실패를 표현한다.
  | { type: 'Right'; right: A }; // 성공을 표현한다.

export const left = <L, A>(left: L): Either<L, A> => ({ type: 'Left', left });

export const right = <L, A>(right: A): Either<L, A> => ({
  type: 'Right',
  right,
});

export const fold = <L, A, R>(
  fa: Either<L, A>,
  onLeft: (left: L) => R,
  onRight: (right: A) => R,
): R => (fa.type === 'Left' ? onLeft(fa.left) : onRight(fa.right));
