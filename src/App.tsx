import "./styles.css";
import Todo from "./pages/Todo";
import { todoModule } from "./store";

export default function App() {
  const module = new todoModule();
  return (
    <div className="App">
      <Todo module={module} />
    </div>
  );
}
