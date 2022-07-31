import "./App.css";
import CounterView from "./app/features/counter/CounterView";
import TodosView from "./app/features/todos/TodosView";
function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Pracits</h1>
      <CounterView />
      <TodosView />
    </div>
  );
}

export default App;
