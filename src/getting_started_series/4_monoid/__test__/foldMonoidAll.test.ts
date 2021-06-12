import { foldMonoidAll } from '../foldMonoidAll';

describe('monoidAll 인스턴스에 concatAll 함수를 사용한 foldMonoidAll 함수 테스트', () => {
  it('foldMonoidAll 함수 테스트', () => {
    expect(foldMonoidAll([true, true, true])).toBeTruthy();
    expect(foldMonoidAll([true, false, true])).toBeFalsy();
    expect(foldMonoidAll([false, false, false])).toBeFalsy();
  });
});
