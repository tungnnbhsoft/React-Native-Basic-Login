import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../features/users/usersSlice'
import todosReducer from '../features/todos/todosSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer
  }
})