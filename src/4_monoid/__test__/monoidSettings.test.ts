import type { Settings } from '../monoidSettings';
import { isSome, some, none } from 'fp-ts/lib/Option';
import { monoidSettings } from '../monoidSettings';

describe('getLastMonoid를 사용한 monoidSettings 인스턴스 테스트', () => {
  const workspaceSettings: Settings = {
    fontFamily: some('Courier'),
    fontSize: none,
    maxColumn: some(80),
  };
  const userSettings: Settings = {
    fontFamily: some('Fira Code'),
    fontSize: some(12),
    maxColumn: none,
  };

  it('monoidSettings 인스턴스 concat 함수 테스트', () => {
    const result = monoidSettings.concat(workspaceSettings, userSettings);

    expect(isSome(result.fontFamily)).toBeTruthy();
    expect(result.fontFamily).toMatchObject(some('Fira Code'));

    expect(isSome(result.fontSize)).toBeTruthy();
    expect(result.fontSize).toMatchObject(some(12));

    expect(isSome(result.maxColumn)).toBeTruthy();
    expect(result.maxColumn).toMatchObject(some(80));
  });
});
