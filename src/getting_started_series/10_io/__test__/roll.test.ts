import { log } from 'fp-ts/lib/Console';
import { chain } from 'fp-ts/lib/IO';
import { randomInt } from 'fp-ts/lib/Random';
import { roll } from '../roll';
import { withLogging } from '../withLogging';

describe('IO 추상화를 사용한 주사위의 합을 더하는 roll 함수 테스트', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  beforeEach(() => {
    spy.mockClear();
  });
  it('random 함수를 mocking해 roll 함수가 정상적으로 주사위의 합을 반환하는지 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    expect(roll(dice)()).toBe(34);
  });
  it('IO의 chain을 이용해 log 함수를 함께 이용하는 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    chain((result) => log(`Result is: ${result}`))(roll(dice))();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith('Result is: 34');
  });
  it('IO의 chain을 이용해 withLogging 함수를 함께 이용하는 경우 테스트', () => {
    global.Math.random = jest.fn().mockReturnValue(0.99);
    const D4 = randomInt(1, 4);
    const D10 = randomInt(1, 10);
    const D20 = randomInt(1, 20);
    const dice = [D4, D10, D20];
    chain((result) => log(`Result is: ${result}`))(
      roll(dice.map(withLogging)),
    )();
    expect(spy).toBeCalledTimes(4);
    expect(spy).toBeCalledWith('Value is: 4');
    expect(spy).toBeCalledWith('Value is: 10');
    expect(spy).toBeCalledWith('Value is: 20');
    expect(spy).toBeCalledWith('Result is: 34');
  });
});
