import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addToListCategory: (state, action) => {
            state.list.push(action.payload) 
        }
    }
    
})

export const { addToListCategory } = categorySlice.actions
export default categorySlice.reducer