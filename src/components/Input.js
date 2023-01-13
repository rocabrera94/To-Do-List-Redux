import  {useState} from "react";
import './Input.css'
import { useDispatch } from "react-redux";
import { deleteAll, saveTodo } from "../features/todos/todosSlice";


const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const addTodo = () =>{
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        setInput('')
    }
    const deleteAllTodos = () => {
      dispatch(deleteAll())

    }
   
  return (
    <div className="container">
        <input type='text' value={input} onChange={e=> setInput(e.target.value)}></input>
        <button className="btn-add" onClick={addTodo}>Add</button> 
        <button className="btn-delete" onClick={deleteAllTodos}>Delete all</button>
    </div>
  )
}

export default Input