import { compositionWithFlow, compositionWithPipe } from '../compositionExample';

describe('flow를 이용해 조합한 함수와 map과 pipe를 이용해 조합한  함수 테스트', () => {
  it('flow를 이용해 함수를 조합한 compositionWithFlow 함수 테스트', () => {
    expect(compositionWithFlow('aa')).toBe(true)
    expect(compositionWithFlow('a')).toBe(false)
  });
  it('map과 pipe를 이용해 함수를 조합한 compositionWithPipe 함수 테스트', () => {
    expect(compositionWithPipe('aa')).toBe(true)
    expect(compositionWithPipe('a')).toBe(false)
  });
  it('compositionWithFlow와 compositionWithPipe가 같은 결과를 반환하는지 테스트', () => {
    expect(compositionWithPipe('aa')).toBe(compositionWithFlow('aa'));
    expect(compositionWithFlow('aa')).toBe(compositionWithPipe('aa'));
    expect(compositionWithPipe('a')).toBe(compositionWithFlow('a'));
    expect(compositionWithFlow('a')).toBe(compositionWithPipe('a'));
  })
});
