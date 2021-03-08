import React from "react";

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
