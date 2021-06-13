import { isNone, isSome, none, some } from 'fp-ts/lib/Option';
import { getItem, setItem } from '../localStorage';

describe('실패하지 않는 연산을 표현하는 추상화 IO를 사용한 localStorage 메서드 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const store = {};
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => store[key]);
    jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: string) => {
        store[key] = value;
      });
  });
  let result;
  it('localStorage에 값을 설정하는 setItem 함수 테스트', () => {
    setItem('key1', 'value1')();
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith('key1', 'value1');
  });
  it('localStorage에 값이 없을 경우 getItem 함수 테스트', () => {
    result = getItem('empty')();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith('empty');
    expect(isNone(result)).toBeTruthy();
    expect(result).toMatchObject(none);
  });
  it('localStorage에 값이 있을 경우 getItem 함수 테스트', () => {
    setItem('key1', 'value1')();
    result = getItem('key1')();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith('key1');
    expect(isSome(result)).toBeTruthy();
    expect(result).toMatchObject(some('value1'));
  });
});
