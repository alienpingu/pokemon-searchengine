import { createSlice } from '@reduxjs/toolkit'

export const actualSlice = createSlice({
  name: 'actual',
  initialState: {
    pokemon: {},
    grid: [],
    query: ''
  },
  reducers: {
    loadPokemon: (state, action) => {
      state.pokemon = action.payload
    },
    saveGrid: (state, action) => {
      state.grid = action.payload
    },
    saveQuery: (state,action) => {
      state.query = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {loadPokemon, saveGrid, saveQuery} = actualSlice.actions

export default actualSlice.reducer