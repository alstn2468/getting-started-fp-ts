import { flow, pipe } from 'fp-ts/lib/function'
import { map } from 'fp-ts/lib/Reader'

const len = (s: string): number => s.length
const double = (n: number): number => n * 2
const gt2 = (n: number): boolean => n > 2

export const compositionWithFlow = flow(len, double, gt2)

export const compositionWithPipe = pipe(len, map(double), map(gt2))
