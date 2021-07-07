import { monoidVoid } from '../monoidVoid';

describe('void 타입을 위한 Monoid 인스턴스 monoidVoid 테스트', () => {
  it('monoidVoid 인스턴스 concat 함수 테스트', () => {
    expect(monoidVoid.concat()).toBe(undefined);
  });
  it('monoidVoid 인스턴스 empty 속성 테스트', () => {
    expect(monoidVoid.empty).toBe(undefined);
  });
});
