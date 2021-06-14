import type { IO } from 'fp-ts/lib/IO';
import type { Monoid } from 'fp-ts/lib/Monoid';
import { getApplicativeMonoid } from 'fp-ts/lib/Applicative';
import { Applicative } from 'fp-ts/lib/IO';
import { concatAll } from 'fp-ts/lib/Monoid';
import { MonoidSum } from 'fp-ts/lib/number';

type Die = IO<number>;

const monoidDie: Monoid<Die> = getApplicativeMonoid(Applicative)(MonoidSum);

/** 주사위를 굴린 결과의 합을 반환합니다. */
export const roll: (dice: Array<Die>) => IO<number> = concatAll(monoidDie);
