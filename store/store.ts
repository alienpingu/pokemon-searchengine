import { configureStore } from '@reduxjs/toolkit'
import actualSlice from '@/slices/actualSlice'

export default configureStore({
  reducer: {
    actual: actualSlice
  }
})