import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

function TodoItem({ todoItem, removeTodo }) {
  const [isComplited, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted((prev) => !prev);
  };

  const removeTodoItem = () => {
    removeTodo(todoItem.id);
  };

  return (
    <Fragment>
      <h2 className="toDo-list__item-title">{todoItem.title}</h2>
      <br />
      <div
        className={
          isComplited
            ? "toDo-list__item-information_complited"
            : "toDo-list__item-information"
        }
      >
        <p className="toDo-list__item-description">{todoItem.description}</p>
        <div className="toDo-list__switchers">
          <input
            type="checkbox"
            name="isComplited"
            className="toDo-list__item-status"
            onChange={handleChange}
          />
          <button className="toDo-list__delete-button" onClick={removeTodoItem}>
            x
          </button>
        </div>
      </div>
    </Fragment>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  removeTodo: PropTypes.func,
};

export default TodoItem;
