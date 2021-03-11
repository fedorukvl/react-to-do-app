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
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          type="text"
          id="todoItem-description"
          className="add-todo__input"
          placeholder="Описание"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
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
