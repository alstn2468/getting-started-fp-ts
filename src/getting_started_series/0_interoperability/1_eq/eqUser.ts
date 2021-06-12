import { contramap } from 'fp-ts/lib/Eq';
import { eqNumber } from './eqNumber';

type User = {
  userId: number;
  name: string;
};

/** 두 User는`userId` 필드가 같으면 같습니다. */
export const eqUser = contramap((user: User) => user.userId)(eqNumber);
