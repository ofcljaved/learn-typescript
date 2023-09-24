import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import TodoItem from './components/TodoItem';
import { getTodos, setTodoLocal } from './features/localStorage';

function App() {
  const [todos, setTodos] = useState<TodoType[]>(getTodos());
  const [task, setTask] = useState<TodoType['title']>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newTodo: TodoType = {
      id: Math.round(Math.random() * 10 ** 10),
      title: task,
      isCompleted: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTask('');
  };

  const isCompleteTodo = (id: TodoType['id']) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: TodoType['id']) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id: TodoType['id'], title: TodoType['title']) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.isCompleted = false;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    setTodoLocal(todos);
  }, [todos]);

  return (
    <>
      <header>
        <h1>TS TODO</h1>
      </header>
      <main>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isCompleteTodo={isCompleteTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </main>
      <footer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            placeholder="Enter Todo"
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </footer>
    </>
  );
}

export default App;
