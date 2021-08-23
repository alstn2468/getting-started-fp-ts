import { head } from '../head';
import { none, some } from '../option';

describe('배열의 맨 처음 값을 Option 타입으로 반환하는 head 함수 테스트', () => {
  const emptyArr = [];
  const nonEmptyArr = [1, 2, 3];
  let result;
  it('배열이 비어있을 경우 테스트', () => {
    result = head(emptyArr);
    expect(result).toMatchObject(none);
  });
  it('배열이 비어있지 않은 경우 테스트', () => {
    result = head(nonEmptyArr);
    expect(result).toMatchObject(some(1));
  });
});
