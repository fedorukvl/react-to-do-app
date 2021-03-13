import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

function TodoItem({ todoItem, index, removeTodo }) {
  const removeTodoItem = () => {
    removeTodo(index);
  };

  return (
    <Fragment>
      <h2 className="toDo-list__item-title">{todoItem.title}</h2>
      <br />
      <div className="toDo-list__item-information">
        <p className="toDo-list__item-description">{todoItem.description}</p>
        <button className="toDo-list__delete-button" onClick={removeTodoItem}>
          x
        </button>
      </div>
    </Fragment>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  removeTodo: PropTypes.func,
  index: PropTypes.number,
};

export default TodoItem;
