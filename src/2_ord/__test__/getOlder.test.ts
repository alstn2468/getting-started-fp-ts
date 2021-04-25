import { getOlder } from '../getOlder';

describe('byAge, min, reverse 함수를 사용하는 getOlder 함수 테스트', () => {
  it('getOlder 함수 테스트 ', () => {
    expect(
      getOlder({ name: 'Guido', age: 48 }, { name: 'Giulio', age: 45 }),
    ).toMatchObject({ name: 'Guido', age: 48 });
  });
});
