import React,{useState} from 'react';
import {AddTodo, TodoList} from './Components'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__header-title">DO YOUR TODO</span>
      </header>
      <main>
      <AddTodo />
      {
        todoList.length ? <TodoList todoList={todoList}/> : <h2 className="app__warning">Пока нет дел</h2>
      }
      </main>
    </div>
  );
}

export default App;
