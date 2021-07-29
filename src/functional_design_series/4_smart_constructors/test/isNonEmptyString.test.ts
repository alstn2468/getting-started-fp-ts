import { isNonEmptyString } from '../isNonEmptyString';

describe('사용자 정의 NonEmptyString 타입 타입 가드 isNonEmptyString 함수 테스트', () => {
  it('인자로 전달된 값이 빈 문자열인 경우', () => {
    expect(isNonEmptyString('')).toBeFalsy();
  });
  it('인자로 전달된 값이 빈 문자열이 아닌 경우', () => {
    expect(isNonEmptyString('success')).toBeTruthy();
  });
});
