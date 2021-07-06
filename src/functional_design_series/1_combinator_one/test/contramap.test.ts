import * as N from 'fp-ts/lib/number';
import * as S from 'fp-ts/lib/string';
import { contramap } from '../contramap';

describe('B => A 함수를 받아 Eq<B> => Eq<A>를 만드는 contramap 테스트', () => {
  const identity = <T>(x: T): T => x;
  const numberToString = (n: number): string => n.toString();
  const pointToNumber = (p: { x: number; y: number }): number => p.x;
  it('B와 A가 타입이 동일하게 number인 경우 테스트', () => {
    const contramapWithIdentity = contramap(identity);
    expect(contramapWithIdentity(N.Eq).equals(1, 1)).toBeTruthy();
    expect(contramapWithIdentity(N.Eq).equals(1, 2)).toBeFalsy();
  });
  it('B가 number A가 string인 경우 테스트', () => {
    const contramapWithNumberToString = contramap(numberToString);
    expect(contramapWithNumberToString(S.Eq).equals(1, 1)).toBeTruthy();
    expect(contramapWithNumberToString(S.Eq).equals(-1, 1)).toBeFalsy();
  });
  it('조금 더 복잡한 타입인 객체일 경우 테스트', () => {
    const contramapWithPointToNumber = contramap(pointToNumber);
    expect(
      contramapWithPointToNumber(N.Eq).equals({ x: 1, y: 1 }, { x: 1, y: 2 }),
    ).toBeTruthy();
    expect(
      contramapWithPointToNumber(N.Eq).equals({ x: -1, y: 1 }, { x: 1, y: 1 }),
    ).toBeFalsy();
  });
});
