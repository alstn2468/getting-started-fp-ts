import { semigroupCustomer } from '../semigroupCustomer';

describe('Semigroup 인터페이스를 구현한 semigroupCustomer 인스턴스 테스트', () => {
  it('semigroupCustomer 인스턴스 concat 함수 테스트', () => {
    expect(
      semigroupCustomer.concat(
        {
          name: 'Giulio',
          favouriteThings: ['math', 'climbing'],
          registeredAt: new Date(2018, 1, 20).getTime(),
          lastUpdatedAt: new Date(2018, 2, 18).getTime(),
          hasMadePurchase: false,
        },
        {
          name: 'Giulio Canti',
          favouriteThings: ['functional programming'],
          registeredAt: new Date(2018, 1, 22).getTime(),
          lastUpdatedAt: new Date(2018, 2, 9).getTime(),
          hasMadePurchase: true,
        },
      ),
    ).toMatchObject({
      name: 'Giulio Canti',
      favouriteThings: ['math', 'climbing', 'functional programming'],
      registeredAt: new Date(2018, 1, 20).getTime(),
      lastUpdatedAt: new Date(2018, 2, 18).getTime(),
      hasMadePurchase: true,
    });
  });
});
