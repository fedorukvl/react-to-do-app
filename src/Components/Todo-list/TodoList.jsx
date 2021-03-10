import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../index.js";
import "./TodoList.css";

function TodoList({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li key={todo.id} className="todo-list__item">
          <TodoItem todoItem={todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
