import type { User } from '../User';
import { eqUser } from '../eqUser';

describe('User 타입을 위한 Eq 인스턴스 eqUser 테스트', () => {
  const user0: User = { id: 1, name: 'test' };
  const user1: User = { id: 1, name: 'test1' };
  const user2: User = { id: 2, name: 'test2' };
  const user3: User = { id: 3, name: 'test1' };
  it('eqUser 인스턴스 equals 함수 테스트 (id가 같은 경우)', () => {
    expect(eqUser.equals(user0, user1)).toBeTruthy();
  });
  it('eqUser 인스턴스 equals 함수 테스트 (name이 같은 경우)', () => {
    expect(eqUser.equals(user1, user3)).toBeFalsy();
  });
  it('eqUser 인스턴스 equals 함수 테스트 (id와 name이 다른 경우)', () => {
    expect(eqUser.equals(user2, user3)).toBeFalsy();
  });
});
