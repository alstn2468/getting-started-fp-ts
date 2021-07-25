import type { Int } from './int';

export function isInt(n: number): n is Int {
  return Number.isInteger(n) && n >= 0;
}
