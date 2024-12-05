import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 40000
}

export const counterSlice = createSlice({
    name: 'saldo',
    initialState,
    reducers: {
        decrement: (state, action) => {
            state.value -= action.payload 
        }
    }
    
})

export const { decrement } = counterSlice.actions
export default counterSlice.reducer