import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Add-todo.css";

function AddTodo({ addTodoItem }) {
  let [todoTitle, setTodoTitle] = useState("");
  let [todoDescription, setTodoDescription] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    addTodoItem({
      title: todoTitle,
      description: todoDescription,
    });
  };

  const setData = (e) => {
    switch (e.target.id) {
      case "todoItem-title":
        setTodoTitle(e.target.value);
        break;
      case "todoItem-description":
        setTodoDescription(e.target.value);
        break;
      default:
        return false;
    }
  };

  return (
    <form className="add-todo" onSubmit={addTodo}>
      <label className="add-todo__label">Добавьте todo</label>
      <div className="add-todo__inputs-field">
        <input
          type="text"
          id="todoItem-title"
          className="add-todo__input"
          placeholder="Заголовок"
          required
          value={todoTitle}
          onChange={setData}
        />
        <input
          type="text"
          id="todoItem-description"
          className="add-todo__input"
          placeholder="Описание"
          value={todoDescription}
          onChange={setData}
        />
        <button className="add-todo__submit" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;
