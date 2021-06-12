import { foldMonoidAny } from '../foldMonoidAny';

describe('monoidAny 인스턴스에 concatAll 함수를 사용한 foldMonoidAny 함수 테스트', () => {
  it('foldMonoidAny 함수 테스트', () => {
    expect(foldMonoidAny([true, true, true])).toBeTruthy();
    expect(foldMonoidAny([true, true, false])).toBeTruthy();
    expect(foldMonoidAny([true, false, false])).toBeTruthy();
    expect(foldMonoidAny([false, false, false])).toBeFalsy();
  });
});
