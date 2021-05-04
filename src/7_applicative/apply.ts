import type { Functor } from 'fp-ts/lib/Functor';
import type { HKT } from 'fp-ts/lib/HKT';

export interface Apply<F> extends Functor<F> {
  ap: <C, D>(fcd: HKT<F, (c: C) => D>, fc: HKT<F, C>) => HKT<F, D>;
}
