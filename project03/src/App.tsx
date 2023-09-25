import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import TodoItem from '@/components/TodoItem';
import { getTodos, setTodoLocal } from '@/features/localStorage';

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
    <div className="max-w-3xl mx-auto grid h-[100vh] grid-rows-[max-content_auto_max-content] pb-10 pt-5">
      <header className="bg-foreground text-background py-5">
        <h1 className="text-center text-2xl">TS TODO</h1>
      </header>
      <main className="grid grid-cols-2 gap-5 p-5 content-start">
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
        <form onSubmit={handleSubmit} className="flex gap-1">
          <Input
            type="text"
            value={task}
            placeholder="Enter Todo"
            onChange={handleInputChange}
          />
          <Button type="submit">Add</Button>
        </form>
      </footer>
    </div>
  );
}

export default App;
