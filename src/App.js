import React,{useState} from 'react';
import {TodoList} from './Components'
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  return (
    <div className="app">
      <header className="app__header">
        <span className="app__header-title">DO YOUR TODO</span>
        {
          toDoList.length ? <TodoList toDoList={toDoList}/> : <h2>Пока нет дел</h2>
        }
      </header>
    </div>
  );
}

export default App;
