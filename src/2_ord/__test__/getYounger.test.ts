import { getYounger } from '../getYounger';

describe('byAge 함수와 min 함수를 사용하는 getYounger 함수 테스트', () => {
  it('getYounger 함수 테스트 ', () => {
    expect(
      getYounger({ name: 'Guido', age: 48 }, { name: 'Giulio', age: 45 }),
    ).toMatchObject({ name: 'Giulio', age: 45 });
  });
});
