import { functorResponse } from '../functorResponse';

describe('Response를 위한 Functor 인스턴스 functorResponse 테스트', () => {
  it('functorResponse 인스턴스 URI 필드 테스트', () => {
    expect(functorResponse.URI).toBe('Response');
  });
  it('functorResponse 인스턴스 map 함수 (f: string) => boolean 테스트', () => {
    const f = (s: string): boolean => s === 'success';
    const result = functorResponse.map(
      {
        url: 'https:127.0.0.1',
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: 'success',
      },
      f,
    );
    expect(result).toMatchObject({
      url: 'https:127.0.0.1',
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: true,
    });
  });
  it('functorResponse 인스턴스 map 함수 (f: object & { text: string }) => string 테스트', () => {
    const f = (body: object & { text: string }): string => body.text;
    const result = functorResponse.map(
      {
        url: 'https:127.0.0.1',
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: { text: 'Hello World!' },
      },
      f,
    );
    expect(result).toMatchObject({
      url: 'https:127.0.0.1',
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: 'Hello World!',
    });
  });
});
