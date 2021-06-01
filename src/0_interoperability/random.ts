import type { IO } from 'fp-ts/lib/IO';

export const random: IO<number> = () => Math.random();
