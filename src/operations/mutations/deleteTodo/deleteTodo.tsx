import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

const deleteTodo = (todosVar: ReactiveVar<Todos>) => (id: number) =>
  todosVar(todosVar().filter((todo: Todo) => todo.id !== id));

export default deleteTodo;
