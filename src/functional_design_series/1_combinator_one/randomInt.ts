import type { IO } from 'fp-ts/lib/IO';

/** `low`와 `high` 사이의 임의의 정수를 반환하는 함수. */
export const randomInt = (low: number, high: number): IO<number> => {
  return () => Math.floor((high - low + 1) * Math.random() + low);
};
