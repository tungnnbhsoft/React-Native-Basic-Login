import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {id: 0, title: "Clean up", description: "Clean yourself up from bed", isDone: false},
    {id: 1, title: "Breakfast", description: "Eat a hearty and nutritous breakfast", isDone: false},
    {id: 2, title: "Get dressed", description: "Get yourself dressed properly for work", isDone: false},]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare( title, description) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            description: description,
            isDone: false
          },
        }
      },
    },
    toggleIsDone(state, action) {
      state.map((todo, index) => {
        if(todo.id=== action.payload) {
          todo.isDone = !todo.isDone
        }
      })
    },
    deleteSingleTodo(state, action) {
      return state.filter(item => item.id !== action.payload)
    },
    updateTodo: {
      reducer(state, action) {
        state.map((todo, index) => {
          if(todo.id=== action.payload.id) {
            todo.title= action.payload.title
            todo.description= action.payload.description
          }
        })
      },
      prepare(id, title, description) {
        return {
          payload: {
            id: id,
            title: title,
            description: description
          }
        }
      },
    },
  }
})
export const { createTodo, toggleIsDone, deleteSingleTodo, updateTodo } = todosSlice.actions
export default todosSlice.reducer