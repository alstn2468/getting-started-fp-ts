import { leftIdentity } from '../leftIdentity';

describe('fast-check을 이용한 속성 기반 테스트', () => {
  it('concat(empty, x) == x인지 확인하는 leftIdentity 함수 테스트', () => {
    // fc.assert(fc.property(arb, leftIdentity));
    // Counterexample: [""]
    // Got error: Property failed by returning false
    expect(leftIdentity('')).toBeFalsy();
    // M.concat(empty, "") -> " "
  });
});
