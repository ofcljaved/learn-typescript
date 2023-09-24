import { useState } from 'react';

type TodoProps = {
  todo: TodoType;
  isCompleteTodo: (id: TodoType['id']) => void;
  deleteTodo: (id: TodoType['id']) => void;
  updateTodo: (id: TodoType['id'], text: TodoType['title']) => void;
};

const TodoItem = ({
  todo,
  isCompleteTodo,
  updateTodo,
  deleteTodo,
}: TodoProps) => {
  const [editable, isEditable] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.title);

  const handleEdit = () => {
    isEditable((prev) => !prev);
  };

  const handleDone = () => {
    updateTodo(todo.id, text);
    handleEdit();
  };

  return (
    <div>
      {editable ? (
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <p>{todo.title}</p>
      )}
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => isCompleteTodo(todo.id)}
      />
      <button
        type="button"
        onClick={() => (editable ? handleDone() : handleEdit())}
      >
        {editable ? 'Done' : 'Edit'}
      </button>
      <button type="button" onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
