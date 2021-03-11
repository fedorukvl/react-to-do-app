import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "../index.js";
import "./TodoList.css";

function TodoList({ todoList, removeTodo }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li key={todo.id} className="todo-list__item">
          <TodoItem todoItem={todo} index={index} removeTodo={removeTodo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func,
};

export default TodoList;
