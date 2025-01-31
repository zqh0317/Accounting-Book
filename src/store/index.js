//Combine submodules and export the store instance

import { configureStore } from '@reduxjs/toolkit'
import billReducer from './modules/billStore'

const store = configureStore({
  reducer: {
    bill: billReducer
  }
})

export default store