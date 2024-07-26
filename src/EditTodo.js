import React from "react";
import { useState } from "react";

const EditTodo = ({
  todo,
  handleCheckTodo,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  // console.log(todo);
  const [editing, setIsEditing] = useState(false);
  const [editedTodo, setIsEditedTodo] = useState(todo.title);
  let content;

  if (editing) {
    content = (
      <>
        <input
          type="text"
          placeholder="Edit todo"
          value={editedTodo}
          onChange={(e) => setIsEditedTodo(e.target.value)}
        />
        <button
          onClick={(e) => {
            handleEditTodo(todo.id, editedTodo);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => handleCheckTodo(e, todo.id)}
      />
      {content}
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </>
  );
};

export default EditTodo;
