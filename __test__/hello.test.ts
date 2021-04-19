import { hello } from '../src/index';

describe('Hello World!', () => {
  let names = ['minsu'];
  let greet = hello(names);

  it('Say Hello World!', () => {
    expect(greet).toBe('Hello minsu!');
  });
});
