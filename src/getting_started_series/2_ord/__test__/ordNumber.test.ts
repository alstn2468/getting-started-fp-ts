import { ordNumber } from '../ordNumber';

describe('Ord 인터페이스를 구현한 ordNumber 인스턴스 테스트', () => {
  it('ordNumber 인스턴스 equals 함수 테스트', () => {
    expect(ordNumber.equals(1, 1)).toBeTruthy();
    expect(ordNumber.equals(1, 2)).toBeFalsy();
  });
  it('ordNumber 인스턴스 compare 함수 테스트', () => {
    expect(ordNumber.compare(3, 3)).toBe(0);
    expect(ordNumber.compare(1, 2)).toBe(-1);
    expect(ordNumber.compare(2, 1)).toBe(1);
  });
});
