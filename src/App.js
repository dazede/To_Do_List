
import TodoList from "./components/TodoList.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List.
        </p>        
      </header>
      <div className="list-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
