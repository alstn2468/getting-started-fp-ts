import { foldMonoidString } from '../foldMonoidString';

describe('monoidString 인스턴스에 concatAll 함수를 사용한 foldMonoidString 함수 테스트', () => {
  it('foldMonoidString 함수 테스트', () => {
    expect(foldMonoidString(['a', 'b', 'c'])).toBe('abc');
  });
});
