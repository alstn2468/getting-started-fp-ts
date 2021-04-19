import { createInterface } from 'readline';
import { Task } from 'fp-ts/Task';

export const read: Task<string> = () =>
  new Promise<string>((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
