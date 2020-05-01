import { ReactiveVar } from "@apollo/client";
import { Todos } from "../../../models/Todos";

const completeTodo = (todosVar: ReactiveVar<Todos>) => (id: number) =>
  todosVar(todosVar().map(t => (t.id === id ? { ...t, completed: true } : t)));

export default completeTodo;
