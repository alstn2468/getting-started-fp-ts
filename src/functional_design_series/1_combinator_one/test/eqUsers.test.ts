import type { User } from '../User';
import { eqUsers } from '../eqUsers';

describe('Array<User> 타입을 위한 Eq 인스턴스 eqUsers 테스트', () => {
  const user0: User = { id: 1, name: 'test' };
  const user1: User = { id: 1, name: 'test1' };
  const user2: User = { id: 2, name: 'test2' };
  const user3: User = { id: 3, name: 'test1' };
  it('eqUsers 인스턴스 equals 함수 테스트 (모두 id가 같은 경우)', () => {
    expect(eqUsers.equals([user0, user1], [user1, user0])).toBeTruthy();
  });
  it('eqUsers 인스턴스 equals 함수 테스트 (하나만 id가 같은 경우)', () => {
    expect(eqUsers.equals([user1, user0], [user3, user1])).toBeFalsy();
  });
  it('eqUsers 인스턴스 equals 함수 테스트 (모두 id가 다른 경우)', () => {
    expect(eqUsers.equals([user2, user0], [user3, user2])).toBeFalsy();
  });
});
