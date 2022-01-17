import React, { useState } from "react";
import "./Style.css";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";
import { FaPlus, FaEdit } from "react-icons/fa";

const TodoForm = () => {
  //STATE
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditId] = useState(null);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  //EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please Input a Todo!");
    } else if (name && isEdit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editID) {
            return { ...todo, text: name };
          }
          return todo;
        })
      );
      setName("");
      setEditId(null);
      setIsEdit(false);
    } else {
      const newTodo = { id: nanoid(), text: name, todoStatus: false };
      setTodos([...todos, newTodo]);
      setName("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(editTodo.text);
  };
  return (
    <div className="body">
      <div className="container">
        <h1>Sam Todo's</h1>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <div className="header">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add Todo"
          />
          <button onClick={handleSubmit} type="button">
            {isEdit ? <FaEdit /> : <FaPlus />}
          </button>
        </div>
        {todos.length > 0 && (
          <div style={{ marginTop: "2rem" }}>
            <TodoList
              editTodo={editTodo}
              removeTodo={removeTodo}
              todos={todos}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
