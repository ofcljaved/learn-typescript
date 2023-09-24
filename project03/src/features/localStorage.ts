export const getTodos = (): TodoType[] => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const setTodoLocal = (todos: TodoType[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
