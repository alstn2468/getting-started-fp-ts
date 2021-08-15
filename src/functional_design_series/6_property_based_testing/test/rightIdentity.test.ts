import { rightIdentity } from '../rightIdentity';

describe('fast-check을 이용한 속성 기반 테스트', () => {
  it('concat(x, empty) == x인지 확인하는 rightIdentity 함수 테스트', () => {
    // fc.assert(fc.property(arb, rightIdentity));
    // Counterexample: [""]
    // Got error: Property failed by returning false
    expect(rightIdentity('')).toBeFalsy();
    // M.concat("", empty) -> " "
  });
});
