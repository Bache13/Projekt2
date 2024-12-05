import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addToListCategory: (state, action) => {
            action.payload.id = Math.max(0, ...state.list.map(list => list.id)) + 1;
            console.log(action.payload)
            state.list.push(action.payload) 
        }
    }    
})

export const { addToListCategory } = categorySlice.actions
export default categorySlice.reducer