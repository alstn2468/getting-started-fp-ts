import type { NonEmptyString } from './nonEmptyString';

// 사용자 지정 타입 가드로 구현된 런타임 검사
export function isNonEmptyString(s: string): s is NonEmptyString {
  return s.length > 0;
}
