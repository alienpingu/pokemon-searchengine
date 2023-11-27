import { createSlice } from '@reduxjs/toolkit'

export const actualSlice = createSlice({
  name: 'actual',
  initialState: {
    pokemon: {}
  },
  reducers: {
    loadPokemon: (state, action) => {
      state.pokemon = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {loadPokemon} = actualSlice.actions

export default actualSlice.reducer