import { readFileWithEither } from '../readFileWithEither';

describe('Either 타입을 이용해 예외 처리를 하는 readFileWithEither 함수 테스트', () => {
  it('readFile 함수가 파일을 성공적으로 읽었을 경우', () => {
    const result = readFileWithEither('success.txt');
    expect(result).toBe('Data: success')
  });
  it('readFile 함수가 파일 읽기를 실패한 경우', () => {
    const result = readFileWithEither('fail.txt');
    expect(result).toBe('Error: fail.txt is not found.')
  });
});
