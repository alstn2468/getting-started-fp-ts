import { printFib } from './printFib';
import { replicateIO } from './replicateIO';

export const printFibs = (n: number) => replicateIO(n, printFib);
