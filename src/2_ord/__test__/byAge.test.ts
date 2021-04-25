import { byAge } from '../byAge';

describe('Ord 인터페이스를 구현한 byAge 함수 테스트', () => {
  it('byAge 인스턴스 compare 함수 테스트 ', () => {
    expect(
      byAge.compare({ name: 'Minsu', age: 22 }, { name: 'Minsu', age: 22 }),
    ).toBe(0);
    expect(
      byAge.compare({ name: 'Minsu', age: 23 }, { name: 'Minsu', age: 22 }),
    ).toBe(1);
    expect(
      byAge.compare({ name: 'Minsu', age: 22 }, { name: 'Minsu', age: 23 }),
    ).toBe(-1);
  });
  it('byAge 인스턴스 equals 함수 테스트 ', () => {
    expect(
      byAge.equals({ name: 'Minsu', age: 22 }, { name: 'Minsu', age: 22 }),
    ).toBeTruthy();
    expect(
      byAge.equals({ name: 'Minsu', age: 23 }, { name: 'Minsu', age: 22 }),
    ).toBeFalsy();
  });
});
