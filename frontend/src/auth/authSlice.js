import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
