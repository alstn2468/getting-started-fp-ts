import * as N from 'fp-ts/lib/number';
import * as S from 'fp-ts/lib/string';
import { of } from 'fp-ts/lib/IO';
import { getMonoid } from '../getMonoid';

describe('Monoid 인스턴스를 받아 IO 인스턴스를 반환하는 getMonoid 함수 테스트', () => {
  const numberMonoidSum = N.MonoidSum;
  const numberMonoidProduct = N.MonoidProduct;
  const stringMonoid = S.Monoid;
  it('인자로 전달된 Monoid가 MonoidSum일 경우 테스트', () => {
    const { concat, empty } = getMonoid(numberMonoidSum);
    expect(concat(of(1), of(2))()).toBe(3);
    expect(empty()).toBe(0);
  });
  it('인자로 전달된 Monoid가 MonoidProduct일 경우 테스트', () => {
    const { concat, empty } = getMonoid(numberMonoidProduct);
    expect(concat(of(1), of(2))()).toBe(2);
    expect(empty()).toBe(1);
  });
  it('인자로 전달된 Monoid가 문자열 Monoid일 경우 테스트', () => {
    const { concat, empty } = getMonoid(stringMonoid);
    expect(concat(of('aaa'), of('bbb'))()).toBe('aaabbb');
    expect(empty()).toBe('');
  });
});
