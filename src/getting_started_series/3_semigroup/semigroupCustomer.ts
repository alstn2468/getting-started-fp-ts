import type { Semigroup } from 'fp-ts/lib/Semigroup';
import { struct, max, min } from 'fp-ts/lib/Semigroup';
import { getMonoid } from 'fp-ts/lib/Array';
import { Ord } from 'fp-ts/lib/number';
import { contramap } from 'fp-ts/lib/Ord';
import { SemigroupAny } from 'fp-ts/lib/boolean';

interface Customer {
  name: string;
  favouriteThings: Array<string>;
  registeredAt: number;
  lastUpdatedAt: number;
  hasMadePurchase: boolean;
}

export const semigroupCustomer: Semigroup<Customer> = struct({
  // 더 긴 이름을 유지한다.
  name: max(contramap((s: string) => s.length)(Ord)),
  // 항목을 축적한다.
  // getMonoid는 Semigroup을 위한 `Array<string`을 반환한다.
  favouriteThings: getMonoid<string>(),
  // 가장 이전의 날짜를 유지한다.
  registeredAt: min(Ord),
  // 가장 최근의 날짜를 유지한다.
  lastUpdatedAt: max(Ord),
  // 분리된 boolean Semigroup
  hasMadePurchase: SemigroupAny,
});
