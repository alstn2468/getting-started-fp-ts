import { time } from './monadIOTime';
import { monadIOIO } from './monadIOIO';

// timeIO: <A>(ma: IO<A>) => IO<[A, number]>
export const timeIO = time(monadIOIO);
