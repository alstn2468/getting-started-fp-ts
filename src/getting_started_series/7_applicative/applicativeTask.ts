import type { Task } from 'fp-ts/lib/Task';

export const applicativeTask = {
  map: <A, B>(fa: Task<A>, f: (a: A) => B): Task<B> => () => fa().then(f),
  of: <A>(a: A): Task<A> => () => Promise.resolve(a),
  ap: <A, B>(fab: Task<(a: A) => B>, fa: Task<A>): Task<B> => () =>
    Promise.all([fab(), fa()]).then(([f, a]) => f(a)),
};
