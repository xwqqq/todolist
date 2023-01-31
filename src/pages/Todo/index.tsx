import { useState, useCallback, useEffect } from "react";
import "./index.scss";
// import styles from "./index.scss";
import { ENTER_KEY } from "../../constants";
import { ITodoInfo, ITodoModule } from "../../store";
import { Utils } from "../../utils";
export default function Todo(module: ITodoModule) {
  const { todos } = module;
  const [info, setInfo] = useState("");

  const list: ITodoInfo[] = (() => {
    const localList = localStorage.getItem("todoList");
    return JSON.parse(localList) || [];
  })();

  const setList = (list: ITodoInfo[]) => {
    localStorage.setItem("todoList", JSON.stringify(list));
  };
  useEffect(() => {
    console.log(list.map((item) => item.title));
  }, [list]);

  const onMouseEnter = useCallback(
    (val: string) => {
      const newList = [
        ...list,
        {
          id: `${val}-${list.length}`,
          title: val,
          done: 0
        }
      ];
      setList(newList);
    },
    [list]
  );

  const renderTodoItem = (item: TodoInfo, idx: number) => {
    return (
      <div className="todo-item" key={item.id} onClick={() => {}}>
        <input
          id="toggle-all"
          className="todo-done"
          type="checkbox"
          onChange={(e) => {
            list[idx] = { ...item, done: e.target.checked ? 1 : 0 };
            setList(list);
          }}
          checked={item.done === 1}
        />
        <div>{idx + 1}. </div>
        <div className="todo-title">{item.title}</div>
        <div
          className="todo-close"
          onClick={() => {
            list.splice(idx, 1);
            setList(list);
          }}
        >
          X
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>todoList</h1>
      <input
        placeholder="请输入待办事项"
        onKeyDown={(e) => {
          if (e.keyCode !== ENTER_KEY || !info) {
            return;
          }
          e.preventDefault();
          module.addTodo(e.target!.value);

          onMouseEnter(e.target!.value);
        }}
        onChange={(e) => {
          setInfo(e.target.value);
        }}
        autoFocus
      />
      {list.length === 0 ? (
        <div className="todo-noData">—— 暂无代办 ——</div>
      ) : (
        <div className="todo-page">
          {list.map((item, idx) => renderTodoItem(item, idx))}
        </div>
      )}
    </div>
  );
}
