import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 40000,
    list: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addToListCategory: (state, action) => {
            if (state.value - action.payload.cost < 0) {
                alert('Less than 0')
                return 
            } else {
                state.value -= action.payload.cost 
            }
            action.payload.id = Math.max(0, ...state.list.map(list => list.id)) + 1;
            console.log(action.payload)
            state.list.push(action.payload) 
        },
    }    
})

export const { addToListCategory } = categorySlice.actions
export default categorySlice.reducer