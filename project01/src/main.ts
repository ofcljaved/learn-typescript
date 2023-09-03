import './style.css';
import { v4 as randomId } from 'uuid';
interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Array<Todo> = [];
const todoContainer = <HTMLElement>document.querySelector('#todoContainer');
const todoInput = <HTMLInputElement>document.querySelector('form > input');
const todoform = <HTMLFormElement>document.getElementById('todoForm');

todoform.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    id: randomId(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(todo);
  todoInput.value = '';
  renderTodo(todos);
  console.log(todos);
};

function generateTodo(todo: Todo): void {
  const { id, title, isCompleted } = todo;

  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('key', id);
  todoDiv.className = 'todo';

  //creating checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = isCompleted;
  checkbox.onchange = () => {
    completeTodo(id, checkbox.checked);
    para.className = checkbox.checked ? 'completed' : '';
  };

  //creating paragraph
  const para = document.createElement('p');
  para.innerText = title;
  para.className = checkbox.checked ? 'completed' : '';

  //creating delete button
  const delBtn = document.createElement('button');
  delBtn.setAttribute('type', 'button');
  const delIcon = document.createElement('i');
  delIcon.className = 'fa-solid fa-minus';
  delBtn.append(delIcon);
  delBtn.onclick = () => {
    deleteTodo(id);
  };

  //append all in the todo Div

  todoDiv.append(checkbox, para, delBtn);

  todoContainer.append(todoDiv);
}

function renderTodo(todos: Array<Todo>): void {
  todoContainer.innerText = '';
  todos.forEach(generateTodo);
}

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

const completeTodo = (id: string, isCompleted: boolean) => {
  todos.find((todo) => {
    todo.id === id && (todo.isCompleted = isCompleted);
  });
};
