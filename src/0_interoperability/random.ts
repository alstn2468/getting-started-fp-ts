import { IO } from 'fp-ts/IO';

export const random: IO<number> = () => Math.random();
