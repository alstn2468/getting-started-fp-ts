import type { Person } from '../person';
import { isSome, isNone, some, none } from 'fp-ts/lib/Option';
import { person } from '../person';

describe('NonEmptyString과 Int를 필드로 갖는 Person 객체를 반환하는 person 함수 테스트', () => {
  let result: Person;
  it('name과 age 인자가 모두 유효할 경우', () => {
    result = person('minsu', 24);
    expect(isSome(result.name)).toBeTruthy();
    expect(isSome(result.age)).toBeTruthy();
    expect(result.name).toMatchObject(some('minsu'));
    expect(result.age).toMatchObject(some(24));
  });
  it('name만 유효할 경우', () => {
    result = person('minsu', 24.1);
    expect(isSome(result.name)).toBeTruthy();
    expect(isNone(result.age)).toBeTruthy();
    expect(result.name).toMatchObject(some('minsu'));
    expect(result.age).toMatchObject(none);
  });
  it('age만 유효할 경우', () => {
    result = person('', 24);
    expect(isNone(result.name)).toBeTruthy();
    expect(isSome(result.age)).toBeTruthy();
    expect(result.name).toMatchObject(none);
    expect(result.age).toMatchObject(some(24));
  });
  it('name과 age 모두 유효하지 않을 경우', () => {
    result = person('', 24.1);
    expect(isNone(result.name)).toBeTruthy();
    expect(isNone(result.age)).toBeTruthy();
    expect(result.name).toMatchObject(none);
    expect(result.age).toMatchObject(none);
  });
});
