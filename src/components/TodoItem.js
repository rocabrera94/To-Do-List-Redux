import React from 'react'
import './TodoItem.css'
import { useDispatch } from "react-redux";
import { deleteTodo } from '../features/todos/todosSlice';
const TodoItem = ({name, done, id}) => {
    const dispatch = useDispatch()
    const deleteItem = () => {  

        dispatch(deleteTodo( {
            id: id,
            todo: name
        }))
    }
    const toggleDone = () =>{
      let styleTodo = document.getElementById(id)
      if (done){
        done = false
        styleTodo.className ='todo'
        console.log(styleTodo.classList)
      } else {
        done= true
        styleTodo.className = 'todo-completed'
        console.log(styleTodo.classList)
      }
    }
    
  return (
    <div className='todoItem' > 
      <p id={id} className='todo' onClick={()=>toggleDone()}>{name}</p>
      <button id='doneBtn' className='delete-btn' onClick={()=>deleteItem()}>X</button>
    </div>
  )
}

export default TodoItem