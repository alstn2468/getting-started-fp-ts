import { M } from './M';

export const rightIdentity = (x: string) => M.concat(x, M.empty) === x;
