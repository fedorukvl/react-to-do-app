import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../index.js";
import "./TodoList.css";

function TodoList({ toDoList }) {
  return (
    <ul className="toDo-list">
      {toDoList.map((todo, index) => (
        <li key={todo.id} className="toDo-list__item">
          <p className="toDo-list__item-index">{index + 1}</p>
          <TodoItem todoItem={todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
