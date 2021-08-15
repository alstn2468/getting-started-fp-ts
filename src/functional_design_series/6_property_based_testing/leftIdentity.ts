import { M } from './M';

export const leftIdentity = (x: string) => M.concat(M.empty, x) === x;
