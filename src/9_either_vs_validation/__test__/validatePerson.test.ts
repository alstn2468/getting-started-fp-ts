import type { Either } from 'fp-ts/lib/Either';
import type { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import type { Person } from '../person';
import { isLeft, isRight, right, left } from 'fp-ts/lib/Either';
import { validatePerson } from '../validatePerson';

describe('입력으로 받은 문자열이 유효한 이름인지 확인하는 validatePerson 함수 테스트', () => {
  let result: Either<NonEmptyArray<string>, Person>;
  const validAge = '20';
  const validName = 'test';
  const inValidAge = 'age';
  const inValidName = '';
  it('인자로 전달되는 이름과 나이가 유효하지 않은 경우 테스트', () => {
    result = validatePerson(inValidName, inValidAge);
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['Invalid name', 'Invalid age']));
  });
  it('인자로 전달되는 이름이 유효하지 않은 경우 테스트', () => {
    result = validatePerson(inValidName, validAge);
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['Invalid name']));
  });
  it('인자로 전달되는 나이가 유효하지 않은 경우 테스트', () => {
    result = validatePerson(validName, inValidAge);
    expect(isLeft(result)).toBeTruthy();
    expect(result).toMatchObject(left(['Invalid age']));
  });
  it('인자로 전달되는 이름과 나이가 유효한 경우 테스트', () => {
    const result = validatePerson(validName, validAge);
    expect(isRight(result)).toBeTruthy();
    expect(result).toMatchObject(right({ name: validName, age: +validAge }));
  });
});
