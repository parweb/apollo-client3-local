import { Todos, Todo } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

const newId = (allTodos: Todos) =>
  allTodos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1) +
  1;

const createNewTodo = (text: string, allTodos: Todos) => ({
  text,
  completed: false,
  id: newId(allTodos)
});

const addTodo = (todosVar: ReactiveVar<Todos>) => (text: string) => {
  const todos = todosVar();
  todosVar(todos.concat([createNewTodo(text, todos)]));
};

export default addTodo;
