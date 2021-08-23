import { none, some, fold } from '../option';

describe('None 타입과 Some 타입으로 이루어진 Sum 타입인 Option 타입 테스트', () => {
  const onNone = () => 'This is None.';
  const onSome = (a: string) => a;
  it('Some 타입을 반환하는 some 함수 테스트', () => {
    const result = some(1);
    expect(result.type).toBe('Some');
    expect(result).toMatchObject({ type: 'Some', value: 1 });
  });
  it('None 타입을 표현하는 none 값 테스트', () => {
    const result = none;
    expect(result.type).toBe('None');
  });
  it('Option 타입 값을 처리하는 fold 함수 테스트 (Some일 경우)', () => {
    const fa = some('some value');
    const result = fold(fa, onNone, onSome);
    expect(result).toBe('some value');
  });
  it('Option 타입 값을 처리하는 fold 함수 테스트 (None일 경우)', () => {
    const fa = none;
    const result = fold(fa, onNone, onSome);
    expect(result).toBe('This is None.');
  });
});
