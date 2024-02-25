import { configureStore } from '@reduxjs/toolkit'
import warehouseDataReducer from "./warehouseSlice"
 export default configureStore({
    reducer:{
      warehouse:warehouseDataReducer
    }
 })

