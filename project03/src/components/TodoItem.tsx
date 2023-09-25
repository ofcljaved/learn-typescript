import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

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
    <Card>
      <CardHeader className="flex-row gap-5 items-center">
        <Checkbox
          checked={todo.isCompleted}
          onCheckedChange={() => isCompleteTodo(todo.id)}
        />
        {editable ? (
          <Input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="flex-1"
          />
        ) : (
          <CardDescription className="flex-1">{todo.title}</CardDescription>
        )}
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => (editable ? handleDone() : handleEdit())}
        >
          {editable ? 'Done' : 'Edit'}
        </Button>
        <Button
          type="button"
          variant="destructive"
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoItem;
