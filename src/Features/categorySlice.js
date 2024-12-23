
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "",
    list: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addToListCategory: (state, action) => {
            if (state.value - action.payload.cost < 0) {
                alert('Hoppsan, du överskred budget!')
                document.body.classList.add('overbudget')
                return 
            } else {
                state.value -= action.payload.cost 
            }
            action.payload.id = Math.max(0, ...state.list.map(list => list.id)) + 1;
            console.log(action.payload)
            state.list.push(action.payload) 
        },
        setMoneyBalance: (state, action) => {
            state.value = action.payload;
        }
    }    
})

export const { addToListCategory, setMoneyBalance } = categorySlice.actions
export default categorySlice.reducer
