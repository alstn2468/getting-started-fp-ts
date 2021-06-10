import { toPerson } from '../toPerson';

describe('[string, number] 튜플을 받아 Person 객체를 반환하는 toPerson 함수 테스트', () => {
  it('toPerson 함수가 정상적으로 값을 반환하는지 테스트', () => {
    const name = 'test';
    const age = 20;
    const tuple: [string, number] = [name, age];
    const result = toPerson(tuple);
    expect(result.age).toBe(age);
    expect(result.name).toBe(name);
    expect(result).toMatchObject({ name, age });
  });
});
