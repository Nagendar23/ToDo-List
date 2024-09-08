import { useState } from 'react';
import './App.css';

function App() {
  const [todoInput, updateInput] = useState("");
  const [todoList, updateTodos] = useState([]);  // Start with an empty array

  let nextId = todoList.length + 1;

  function addNewTodo() {
    if (todoInput === "") {
      alert("Add some task");
    } else {
      const newTodos = [
        ...todoList,
        {
          id: nextId++,
          task: todoInput,
        },
      ];
      updateTodos(newTodos);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);
  }

  return (
    <div className="Container mt-5 w-50">
      <h1 className="text-center">ToDo App using React</h1>
      <div className="input-group">
        <input
          className="form-control"
          onChange={(e) => updateInput(e.target.value)}
          type="text"
          value={todoInput}
        />
        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <p>{todo.task}</p>
            <button onClick={() => deleteTodo(todo.id)} className="btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
