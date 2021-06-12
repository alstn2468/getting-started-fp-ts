import type { Monoid } from 'fp-ts/lib/Monoid';
import type { Option } from 'fp-ts/lib/Option';
import { struct } from 'fp-ts/lib/Monoid';
import { getLastMonoid } from 'fp-ts/lib/Option';

/** VSCode 설정 */
export interface Settings {
  /** font family를 제어한다. */
  fontFamily: Option<string>;
  /** font size 픽셀을 제어한다. */
  fontSize: Option<number>;
  /** 특정 수의 열만 렌더링하도록 미니 맵의 너비를 제한합니다. */
  maxColumn: Option<number>;
}

export const monoidSettings: Monoid<Settings> = struct({
  fontFamily: getLastMonoid<string>(),
  fontSize: getLastMonoid<number>(),
  maxColumn: getLastMonoid<number>(),
});
