import type { IO } from './IO';

export const log = (s: unknown): IO<void> => () => console.log(s);
