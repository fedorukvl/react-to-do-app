import React from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

function TodoList({ toDoList }) {
  return (
    <ul className="toDo-list">
      {toDoList.map((todo, index) => (
        <li key={todo.id} className="toDo-list__item">
          {/* Компонент toDoItem */}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
