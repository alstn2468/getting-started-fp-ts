import { elem } from '../elem';
import { eqNumber } from '../eqNumber';
import { eqPoint } from '../eqPoint';
import { eqVector } from '../eqVector';
import { eqArrayOfPoints } from '../eqArrayOfPoints';
import { eqUser } from '../eqUser';

describe('elem 함수 테스트', () => {
  it('eqNumber를 이용한 elem 함수 테스트 (요소가 있는 경우)', () => {
    expect(elem(eqNumber)(1, [1, 2, 3])).toBeTruthy();
  });
  it('eqNumber를 이용한 elem 함수 테스트 (요소가 없는 경우)', () => {
    expect(elem(eqNumber)(4, [1, 2, 3])).toBeFalsy();
  });
  it('eqPoint를 이용한 elem 함수 테스트 (요소가 있는 경우)', () => {
    expect(
      elem(eqPoint)({ x: 1, y: 2 }, [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ]),
    ).toBeTruthy();
  });
  it('eqPoint를 이용한 elem 함수 테스트 (요소가 없는 경우)', () => {
    expect(
      elem(eqPoint)({ x: 2, y: 1 }, [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ]),
    ).toBeFalsy();
  });
  it('eqVector를 이용한 elem 함수 테스트 (요소가 있는 경우)', () => {
    expect(
      elem(eqVector)({ from: { x: 1, y: 2 }, to: { x: 1, y: 3 } }, [
        { from: { x: 1, y: 2 }, to: { x: 1, y: 3 } },
        { from: { x: 2, y: 3 }, to: { x: 1, y: 3 } },
        { from: { x: 3, y: 4 }, to: { x: 1, y: 3 } },
      ]),
    ).toBeTruthy();
  });
  it('eqVector를 이용한 elem 함수 테스트 (요소가 없는 경우)', () => {
    expect(
      elem(eqVector)({ from: { x: 2, y: 1 }, to: { x: 2, y: 2 } }, [
        { from: { x: 1, y: 2 }, to: { x: 3, y: 5 } },
        { from: { x: 2, y: 3 }, to: { x: 3, y: 5 } },
        { from: { x: 3, y: 4 }, to: { x: 3, y: 5 } },
      ]),
    ).toBeFalsy();
  });
  it('eqArrayOfPoints를 이용한 elem 함수 테스트 (요소가 있는 경우)', () => {
    expect(
      elem(eqArrayOfPoints)(
        [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
        ],
        [
          [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
          ],
          [
            { x: 2, y: 3 },
            { x: 3, y: 4 },
          ],
        ],
      ),
    ).toBeTruthy();
  });
  it('eqArrayOfPoints를 이용한 elem 함수 테스트 (요소가 없는 경우)', () => {
    expect(
      elem(eqArrayOfPoints)(
        [
          { x: 0, y: 1 },
          { x: 1, y: 2 },
        ],
        [
          [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
          ],
          [
            { x: 2, y: 3 },
            { x: 3, y: 4 },
          ],
        ],
      ),
    ).toBeFalsy();
  });
  it('eqUser를 이용한 elem 함수 테스트 (요소가 있는 경우)', () => {
    expect(
      elem(eqUser)({ userId: 1, name: 'Minsu' }, [
        { userId: 1, name: 'Minsu Kim' },
        { userId: 2, name: 'Stevy' },
      ]),
    ).toBeTruthy();
  });
  it('eqUser를 이용한 elem 함수 테스트 (요소가 없는 경우)', () => {
    expect(
      elem(eqUser)({ userId: 1, name: 'Minsu' }, [
        { userId: 2, name: 'Minsu' },
        { userId: 3, name: 'Stevy' },
      ]),
    ).toBeFalsy();
  });
});
