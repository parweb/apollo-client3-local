import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

const completeAllTodos = (todosVar: ReactiveVar<Todos>) => () =>
  todosVar(todosVar().map((t: Todo) => ({ ...t, completed: true })));

export default completeAllTodos;
