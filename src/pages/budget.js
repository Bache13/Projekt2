//Lägga allt det här i egen mapp och sedan länka in i budgetsidan?




//import React from 'react'
import { decrement } from '../counterSlice'
import { addToListCategory } from '../categorySlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'; 


export function Budget () {
    const count = useSelector((state) => state.counter.value)
    const listCategory = useSelector((state) => state.category.list)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    const [inputCategory, setinputCategory] = useState('');


    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setinputCategory(event.target.value)
    }

    const handleAdd = () => {
        const valueToDecrement = parseInt(inputValue, 10);

        if (!isNaN(valueToDecrement) && inputCategory !== '') {
            dispatch(decrement(valueToDecrement));
            dispatch(addToListCategory({ category: inputCategory, cost: valueToDecrement}))
            setInputValue('') // Används för att tömma fältet
            setinputCategory('') // Används för att tömma fältet
        }
    };

    
    return(
        <>

            <div>
                <h1>Budget</h1>
                <div>{count}</div>
                <br></br>
                <input type='text' value={inputCategory} onChange={handleCategoryChange} placeholder='Typ av kostnad'></input>
                <input type='number' value={inputValue} onChange={handleChange} placeholder='Belopp'></input>
                <button onClick={handleAdd}>Add</button>
            </div>

            <div className='table'>
                {listCategory.map(x =>
                <ul>
                    <div key={x} >
                        <li>{x.category}: {x.cost} kr</li>
                    </div>
                    </ul> 
                )}
            </div>         
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

