import { time } from './monadIOTime';
import { monadIOTask } from './monadIOTask';

// timeTask: <A>(ma: Task<A>) => Task<[A, number]>
export const timeTask = time(monadIOTask);
