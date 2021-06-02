import type { User } from '../user';
import { flattenFollowersOfFollowers } from '../flattenFollowersOfFollowers';

describe('flatten을 이용한 followers의 followers를 반환하는 flattenFollowersOfFollowers 함수 테스트', () => {
  const userD: User = { followers: [] };
  const userA: User = { followers: [userD] };
  const userB: User = { followers: [userA] };
  const userC: User = { followers: [userA, userB] };
  let result: Array<User>;
  it('인자로 전달된 user가 userA인 경우', () => {
    result = flattenFollowersOfFollowers(userA);
    expect(result).toMatchObject([]);
  });
  it('인자로 전달된 user가 userB인 경우', () => {
    result = flattenFollowersOfFollowers(userB);
    expect(result).toMatchObject([userD]);
  });
  it('인자로 전달된 user가 userC인 경우', () => {
    result = flattenFollowersOfFollowers(userC);
    expect(result).toMatchObject([userD, userA]);
  });
});
