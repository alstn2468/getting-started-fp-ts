import { M } from '../M';

describe('string 타입의 Monoid 인스턴스 테스트', () => {
  it('Monoid<string>의 empty 필드 테스트', () => {
    expect(M.empty).toBe('');
  });
  it('Monoid<string>의 concat 매서드 테스트', () => {
    expect(M.concat('Hello', 'World!')).toBe('Hello World!');
  });
});
