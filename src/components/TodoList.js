import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Style.css";

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const { id, text } = todo;
          return (
            <li key={id}>
              {text}
              <div className="list__btn">
                <FaEdit onClick={() => editTodo(id)} />
                <FaTrash onClick={() => removeTodo(id)} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
