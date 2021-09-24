import { left, right, fold } from '../either';

describe('Left 타입과 Right 타입으로 이루어진 Sum 타입인 Either 타입 테스트', () => {
  const onLeft = () => 'This is left.';
  const onRight = (a: string) => a;
  it('Left 타입을 반환하는 left 함수 테스트', () => {
    const result = left(1);
    expect(result.type).toBe('Left');
    expect(result).toMatchObject({ type: 'Left', left: 1 });
  });
  it('Right 타입을 반환하는 right 함수 테스트', () => {
    const result = right(1);
    expect(result.type).toBe('Right');
    expect(result).toMatchObject({ type: 'Right', right: 1 });
  });
  it('Either 타입 값을 처리하는 fold 함수 테스트 (Left일 경우)', () => {
    const fa = left('some value');
    const result = fold(fa, onLeft, onRight);
    expect(result).toBe('This is left.');
  });
  it('Either 타입 값을 처리하는 fold 함수 테스트 (Right일 경우)', () => {
    const fa = right('right');
    const result = fold(fa, onLeft, onRight);
    expect(result).toBe('right');
  });
});
