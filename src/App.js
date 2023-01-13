import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import {selectTodoList} from './features/todos/todosSlice'

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <p className='title'>To Do List</p>
     <Input />
      <div className='app-container'>
        <div className='app-todoContainer'>
          {(todoList.length >0 ? (
            todoList.map(item=>(
              <TodoItem name= {item.item} done={item.done} id={item.id} key={item.id}/>
            )
            )
          ):(<p>Add a new task!</p>))
            
        
        }
        </div>
       
      </div>
    </div>
  );
}

export default App;