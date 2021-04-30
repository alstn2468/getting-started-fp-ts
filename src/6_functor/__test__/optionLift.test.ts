import { none, some } from 'fp-ts/lib/Option';
import { optionLift } from '../optionLift';

describe('(fb: F<B>) => F<C>에서 F가 Option인 Functor 테스트', () => {
  it('B = string, C = number인 경우 테스트', () => {
    const g = (s: string) => s.length;
    expect(optionLift(g)(none)).toMatchObject(none);
    expect(optionLift(g)(some('1'))).toMatchObject(some(1));
    expect(optionLift(g)(some('22'))).toMatchObject(some(2));
    expect(optionLift(g)(some('333'))).toMatchObject(some(3));
  });
  it('B = boolean, C = string 경우 테스트', () => {
    const g = (b: boolean) => (b ? 'success' : 'fail');
    expect(optionLift(g)(none)).toMatchObject(none);
    expect(optionLift(g)(some(true))).toMatchObject(some('success'));
    expect(optionLift(g)(some(false))).toMatchObject(some('fail'));
  });
});
