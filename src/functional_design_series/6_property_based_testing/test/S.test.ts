import { S } from '../S';

describe('string 타입의 Semigroup 인스턴스 테스트', () => {
  it('Semigroup<string>의 concat 매서드 테스트', () => {
    expect(S.concat('Hello', 'World!')).toBe('Hello World!');
  });
});
