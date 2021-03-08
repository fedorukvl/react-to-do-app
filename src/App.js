import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  return (
    <div className="app">
      <header className="app__header">
        <span className="app__header-title">DO YOUR TODO</span>
      </header>
    </div>
  );
}

export default App;
