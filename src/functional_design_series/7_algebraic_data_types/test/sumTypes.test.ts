import { add, del, update } from '../sumTypes';

describe('Redux 액션을 표현할 수 있는 Sum 타입 액션 테스트', () => {
  let result;
  it('Todo 리스트에 값을 추가하는 액션인 add 함수 테스트', () => {
    result = add('add data');
    expect(result).toMatchObject({ type: 'ADD_TODO', text: 'add data' });
  });
  it('Todo 리스트에 값을 지우는 액션인 del 함수 테스트', () => {
    result = del(1);
    expect(result).toMatchObject({ type: 'DELETE_TODO', id: 1 });
  });
  it('Todo 리스트에 값을 업데이트하는 액션인 update 함수 테스트', () => {
    result = update(1, 'update data', true);
    expect(result).toMatchObject({
      type: 'UPDATE_TODO',
      id: 1,
      completed: true,
    });
  });
});
