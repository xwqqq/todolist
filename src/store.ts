import { Utils } from "./utils";

interface ITodoInfo {
  id: string;
  title: string;
  done: number;
}

interface ITodoModule {
  todos: ITodoInfo[];
  addTodo(newTitle: string);
}

class todoModule implements ITodoModule {
  constructor() {}
  todos: ITodoInfo[];
  public static addTodo(newTitle: string) {
    this.todos = this.todos.concat({
      id: Utils.uuid(),
      title: newTitle,
      done: 0
    });
  }
  clearTodos() {}
}

export { todoModule };
export type { ITodoModule, ITodoInfo };
