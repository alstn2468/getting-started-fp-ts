import { monoidString } from '../monoidString';

describe('Monoid 인터페이스를 구현한 monoidString 인스턴스 테스트', () => {
  it('monoidString 인스턴스 concat 함수 테스트', () => {
    expect(monoidString.concat('Hello ', 'World!')).toBe('Hello World!');
  });

  it('monoidString 인스턴스 empty 필드 테스트', () => {
    expect(monoidString.empty).toBe('');
  });
});
