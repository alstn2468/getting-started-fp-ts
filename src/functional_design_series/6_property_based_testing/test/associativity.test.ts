import * as fc from 'fast-check';
import { associativity } from '../associativity';

describe('fast-check을 이용한 속성 기반 테스트', () => {
  it('(x + y) + z === x + (y + z)인지 확인하는 associativity 함수 테스트', () => {
    const arb: fc.Arbitrary<string> = fc.string();
    fc.assert(fc.property(arb, arb, arb, associativity));
  });
});
