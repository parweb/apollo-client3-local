import { ReactiveVar } from "@apollo/client";
import { Todos } from "../../../models/Todos";

const clearCompletedTodos = (todosVar: ReactiveVar<Todos>) => () =>
  todosVar(todosVar().filter(t => t.completed !== true));

export default clearCompletedTodos;
