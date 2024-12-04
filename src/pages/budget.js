//import React from 'react'
import { decrement } from '../counterSlice'
import { useSelector, useDispatch } from 'react-redux'

export function Budget () {
    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()
    
    return(
        <>
            <h1>Budget</h1>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement(5000))}>Add</button>
        </>
    )
}
export default Budget

//Lägga till funktionerna: 
//Skapa en budgethanteringsapp där användaren kan lägga till inkomster och utgifter.
//Använd Redux för att hålla koll på det totala saldot och kategoriserade poster (t.ex. "mat", "hyra").

/* 
-- Ruta för inkomst (Hård koda in inkomst men visa värdet?) Saldot uppdateras?
-- Utgifter (vad för typ (mat, hyra, transport), kostnad) Mat 800kr
-- Ruta för saldo efter kostnader


*/

