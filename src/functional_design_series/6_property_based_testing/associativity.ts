import { S } from './S';

export const associativity = (x: string, y: string, z: string) =>
  S.concat(S.concat(x, y), z) === S.concat(x, S.concat(y, z));
