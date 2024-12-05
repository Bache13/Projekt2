import React, { useState } from 'react'; 
import { decrement } from '../Features/counterSlice'
import { addToListCategory } from '../Features/categorySlice'
import { useSelector, useDispatch } from 'react-redux'
 

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

    function totalPrice() {
        let total = 0
        for (let x of listCategory) {
            total += x.cost
        }
        return total
    }

    return(
        <>
        <h1>Budget</h1>
            <p className='saldo'>
                Saldo: {count}       
            </p>

            <div className='budget'>
                {/* <div>{count}</div> */}
                <br></br>
                <input type='text' alt='Textruta för typ av kostnad' value={inputCategory} onChange={handleCategoryChange} placeholder='Typ av kostnad'></input>
                <input type='number' alt='Nummerruta för kostnad i kronor' value={inputValue} onChange={handleChange} placeholder='Belopp'></input>
                <button className='addbtn' onClick={handleAdd}>Add</button>
            </div>

            <div className='budget'>
            <ul>
                {listCategory.map(x =>
                    <div key={x.id} >
                        <li>{x.category}: {x.cost} kr</li>
                    </div> 
                )}
                </ul>
            </div>   
            <p className='saldo'>Utgifter: {totalPrice()} kr  </p>
        </>
    )
}


