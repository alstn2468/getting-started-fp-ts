import type { IO } from 'fp-ts/lib/IO';

/** 콘솔에 메세지를 출력하는 함수 */
export function log(message: unknown): IO<void> {
  return () => console.log(message);
}
