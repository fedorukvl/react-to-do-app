import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ addTodoItem }) {
  let [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="add-todo" onSubmit={() => addTodoItem(todo)}>
      <label htmlFor="todoItem" className="add-todo__label">
        Добавьте todo
      </label>
      <input
        type="text"
        id="todoItem"
        className="add-todo__input"
        placeholder="Add todo-do-do-do"
        required
        value={todo}
        onChange={handleChange}
      />
      <button className="add-todo__submit" type="submit">
        Add
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default AddTodo;
