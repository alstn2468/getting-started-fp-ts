import type { IO } from './IO';

export const random: IO<number> = () => Math.random();
