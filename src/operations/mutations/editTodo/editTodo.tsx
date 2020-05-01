import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

const editTodo = (todosVar: ReactiveVar<Todos>) => (id: number, text: string) =>
  todosVar(
    todosVar().map((todo: Todo) => (todo.id === id ? { ...todo, text } : todo))
  );

export default editTodo;
