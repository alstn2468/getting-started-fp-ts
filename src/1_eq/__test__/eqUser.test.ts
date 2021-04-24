import { eqUser } from '../eqUser';

describe('Eq 인터페이스를 구현한 eqUser 인스턴스 테스트', () => {
  it('eqUser 인스턴스 equals 함수 테스트', () => {
    expect(
      eqUser.equals(
        { userId: 1, name: 'Giulio' },
        { userId: 1, name: 'Giulio Canti' },
      ),
    ).toBeTruthy();
    expect(
      eqUser.equals(
        { userId: 1, name: 'Giulio' },
        { userId: 2, name: 'Giulio' },
      ),
    ).toBeFalsy();
  });
});
