export type Option<A> =
  | { type: 'None' }
  | {
      type: 'Some';
      value: A;
    };

export const none: Option<never> = { type: 'None' };

export const some = <A>(value: A): Option<A> => ({ type: 'Some', value });

export const fold = <A, R>(
  fa: Option<A>,
  onNone: () => R,
  onSome: (a: A) => R,
): R => (fa.type === 'None' ? onNone() : onSome(fa.value));
