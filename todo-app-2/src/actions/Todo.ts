
export const addTodo = (todo: any) => {
  return {
    type: 'ADD_TODO',
    payload: { todo: todo }
  };
}