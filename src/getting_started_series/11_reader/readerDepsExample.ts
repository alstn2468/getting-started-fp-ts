import type { Reader } from 'fp-ts/lib/Reader';
import type { Dependencies } from './Dependencies';

export const f = (b: boolean): Reader<Dependencies, string> => (deps) =>
  b ? deps.i18n.true : deps.i18n.false;

export const g = (n: number): Reader<Dependencies, string> => f(n > 2);

export const h = (s: string): Reader<Dependencies, string> => g(s.length + 1);
