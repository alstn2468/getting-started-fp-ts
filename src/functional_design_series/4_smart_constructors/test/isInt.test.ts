import { isInt } from '../isInt';

describe('사용자 정의 Int 타입 타입 가드 isInt 함수 테스트', () => {
  it('인자로 전달된 값이 number 이면서 정수인 경우', () => {
    expect(isInt(1)).toBeTruthy();
  });
  it('인자로 전달된 값이 number 이면서 실수인 경우', () => {
    expect(isInt(0.1)).toBeFalsy();
  });
});
