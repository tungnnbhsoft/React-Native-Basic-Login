import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {userId: null, email: null, password: null}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        state.userId = action.payload.userId
        state.email = action.payload.email
        state.password = action.payload.password
      },
      prepare( emailInput, passwordInput) {
        return {
          payload: {
            userId: nanoid(),
            email: emailInput,
            password: passwordInput
          },
        }
      },
    },
    logoutUser(state, action) {
        state.userId = null
        state.email = null
        state.password = null
    }
  }
})
export const { setUser, logoutUser } = usersSlice.actions
export default usersSlice.reducer