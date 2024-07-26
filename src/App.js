import { useState } from "react";
import EditTodo from "./EditTodo";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");

  function handleTodo(e) {
    setTitle(e.target.value);
  }

  function handleAddTodo() {
    const copiedTodos = [...todos, { id: nextId++, title: title, done: false }];
    setTodos(copiedTodos);
    setTitle("");
  }

  function handleCheckTodo(e, id) {
    const copiedTodos = [...todos];

    const checkedTodos = copiedTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: e.target.checked };
      } else {
        return todo;
      }
    });

    setTodos(checkedTodos);
  }

  function handleDeleteTodo(id) {
    const copiedTodos = [...todos];

    const filteredTodos = copiedTodos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filteredTodos);
  }

  function handleEditTodo(id, editedTodo) {
    // console.log(id);
    const copiedTodos = [...todos];
    const editTodos = copiedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: editedTodo,
        };
      } else {
        return todo;
      }
    });

    setTodos(editTodos);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => handleTodo(e)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <EditTodo
                todo={todo}
                handleCheckTodo={handleCheckTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
