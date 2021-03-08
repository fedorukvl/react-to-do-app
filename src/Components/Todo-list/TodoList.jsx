import React from "react";
import PropTypes from "prop-types";

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

TodoList.PropTypes = {
  toDoList: arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
