import { createSlice } from "@reduxjs/toolkit"
import data from "./warehouseData.json"

const warehouseSlice=createSlice({
    name:"warehouse",
    initialState:{
        warehouseData:[...data],

    },
    reducers:{

        setwareahouseData:(state,action)=>{
            state.warehouseData=action.payload;
        }
    }
})

export const {setwareahouseData}=warehouseSlice.actions;

export default warehouseSlice.reducer;