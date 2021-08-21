export type Action =
  | {
      type: 'ADD_TODO';
      text: string;
    }
  | {
      type: 'UPDATE_TODO';
      id: number;
      text: string;
      completed: boolean;
    }
  | {
      type: 'DELETE_TODO';
      id: number;
    };

export const add = (text: string): Action => ({
  type: 'ADD_TODO',
  text,
});

export const del = (id: number): Action => ({
  type: 'DELETE_TODO',
  id,
});

export const update = (
  id: number,
  text: string,
  completed: boolean,
): Action => ({
  type: 'UPDATE_TODO',
  id,
  text,
  completed,
});
