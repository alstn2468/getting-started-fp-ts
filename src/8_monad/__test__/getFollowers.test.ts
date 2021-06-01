import { getFollowers } from '../getFollowers';
import { User } from '../user';

describe('User 인스턴스의 followers 값을 반환하는 getFollowers 함수 테스트', () => {
  const userA: User = { followers: [] };
  const userB: User = { followers: [userA] };
  const userC: User = { followers: [userA, userB] };
  let result: Array<User>;
  it('인자로 전달된 user가 userA인 경우', () => {
    result = getFollowers(userA);
    expect(result).toMatchObject([]);
  });
  it('인자로 전달된 user가 userB인 경우', () => {
    result = getFollowers(userB);
    expect(result).toMatchObject([userA]);
  });
  it('인자로 전달된 user가 userC인 경우', () => {
    result = getFollowers(userC);
    expect(result).toMatchObject([userA, userB]);
  });
});
