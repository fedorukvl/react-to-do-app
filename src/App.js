import React,{useState} from 'react';
import {TodoList} from './Components'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="app">
      <header className="app__header">
        <span className="app__header-title">DO YOUR TODO</span>
      </header>
      <main>
      {
        todoList.length ? <TodoList todoList={todoList}/> : <h2>Пока нет дел</h2>
      }
      </main>
    </div>
  );
}

export default App;
