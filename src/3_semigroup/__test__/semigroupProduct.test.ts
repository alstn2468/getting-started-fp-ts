import { semigroupString } from '../semigroupString';

describe('Semigroup 인터페이스를 구현한 semigroupString 인스턴스 테스트', () => {
  it('semigroupString 인스턴스 concat 함수 테스트', () => {
    expect(semigroupString.concat('Hello ', 'World!')).toBe('Hello World!');
  });
});
