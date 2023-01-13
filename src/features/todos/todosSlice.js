import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todoList:[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) =>{
        state.todoList.push(action.payload)
    },
    deleteTodo: (state, action) => {
        return {...state,
         todoList: state.todoList.filter((todo) => todo.id !== action.payload.id)
        }      
    },
    deleteAll: (state) =>{
      return {
        todoList: []
        
      }
    }
    
  }
})

export const { saveTodo, deleteTodo, deleteAll } = todoSlice.actions


export const selectTodoList = (state) => state.todos.todoList

export default todoSlice.reducer