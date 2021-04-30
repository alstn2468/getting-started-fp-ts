import type { Task } from 'fp-ts/lib/Task';

export function taskLift<B, C>(g: (b: B) => C): (fb: Task<B>) => Task<C> {
  return (fb) => () => fb().then(g);
}
