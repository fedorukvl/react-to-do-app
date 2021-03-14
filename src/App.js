import React,{useState} from 'react';
import {AddTodo, TodoList} from './Components'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [generatedId,setId] = useState(1);

  const addTodoItem = (todo)=>{
    setTodoList(prev => prev.concat([{
      id: generatedId,
      ...todo,
    }]));
    setId(prev=>prev+1);
  };

  const removeTodo = (todoId) =>{
    setTodoList(prev => prev.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__header-title">DO YOUR TODO</span>
      </header>
      <main>
      <AddTodo addTodoItem={addTodoItem}/>
      {
        todoList.length ? <TodoList todoList={todoList} removeTodo={removeTodo}/> : <h2 className="app__warning">Пока нет дел</h2>
      }
      </main>
    </div>
  );
}

export default App;
