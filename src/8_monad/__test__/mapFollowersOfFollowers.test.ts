import { mapFollowersOfFollowers } from '../mapFollowersOfFollowers';
import { User } from '../user';

describe('Array의 map으로 구현된 followers의 followers를 반환하는 mapFollowersOfFollowers 함수 테스트', () => {
  const userD: User = { followers: [] };
  const userA: User = { followers: [userD] };
  const userB: User = { followers: [userA] };
  const userC: User = { followers: [userA, userB] };
  let result: Array<Array<User>>;
  it('인자로 전달된 user가 userA인 경우', () => {
    result = mapFollowersOfFollowers(userA);
    expect(result).toMatchObject([[]]);
  });
  it('인자로 전달된 user가 userB인 경우', () => {
    result = mapFollowersOfFollowers(userB);
    expect(result).toMatchObject([[userD]]);
  });
  it('인자로 전달된 user가 userC인 경우', () => {
    result = mapFollowersOfFollowers(userC);
    expect(result).toMatchObject([[userD], [userA]]);
  });
});
