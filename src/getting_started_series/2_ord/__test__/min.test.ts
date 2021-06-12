import { min } from '../min';
import { ordNumber } from '../ordNumber';

describe('Ord 인터페이스를 이용한 min 함수 테스트', () => {
  it('ordNumber를 이용한 min 함수 테스트 ', () => {
    expect(min(ordNumber)(2, 1)).toBe(1);
    expect(min(ordNumber)(2, 3)).toBe(2);
  });
});
