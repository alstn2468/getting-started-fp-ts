import { arrayLift } from '../arrayLift';

describe('(fb: F<B>) => F<C>에서 F가 Array인 Functor 테스트', () => {
  it('B = string, C = number인 경우 테스트', () => {
    const g = (s: string) => s.length;
    const arr = ['a', 'bb', 'ccc', 'dddd'];
    expect(arrayLift(g)(arr)).toMatchObject([1, 2, 3, 4]);
  });
  it('B = boolean, C = string인 경우 테스트', () => {
    const g = (b: boolean) => (b ? 'success' : 'fail');
    const arr = [true, true, false, false, true];
    expect(arrayLift(g)(arr)).toMatchObject([
      'success',
      'success',
      'fail',
      'fail',
      'success',
    ]);
  });
});
