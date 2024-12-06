import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToListCategory, setMoneyBalance } from '../Features/categorySlice';

export function Budget () {
    const count = useSelector((state) => state.category.value); 
    const listCategory = useSelector((state) => state.category.list); 
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [inputCategory, setinputCategory] = useState('');

    const [inputBalance, setInputBalance] = useState(count); // Här är inkomst inlagd

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setinputCategory(event.target.value);
    }

    ///Nedan är nytt
    const handleBalanceChange = (event) => { //här är för inkomsten
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setInputBalance(value); 
            dispatch(setMoneyBalance(value)); 
        }
    }

    const handleAdd = () => {
        const valueToDecrement = parseInt(inputValue, 10);

        if (!isNaN(valueToDecrement) && inputCategory !== '') {
            dispatch(addToListCategory({ category: inputCategory, cost: valueToDecrement }));
            setInputValue(''); // Används för att tömma fältet
            setinputCategory(''); // Används för att tömma fältet
            setInputBalance('');
        }
    };

    function totalPrice() {
        let total = 0;
        for (let x of listCategory) {
            total += x.cost; 
        }
        return total;
    }


    return (
        <>
        <h1>Budget</h1>
        <p>Fyll i din budget och börja lägga till dina kostnader<br></br> under olika kategorier. Ange typ av kostnad och <br></br>belopp, tryck på Add och se hur dina utgifter dras<br></br> från saldot.</p>

        <div className='saldo'>
            <label>
            Saldo: {count} kr
            <input type='number'  alt='Textruta för inkomst' value={inputBalance} onChange={handleBalanceChange} placeholder='Ange din budget'/>
            </label>
        </div>

        <div className='budget'>
                <label>
                    Kategori
                <input type='text' alt='Textruta för typ av kostnad' value={inputCategory} onChange={handleCategoryChange} placeholder='Typ av kostnad'></input>
                </label>
                <label>
                    Kostnad
                <input type='number' alt='Nummerruta för kostnad i kronor' value={inputValue} onChange={handleChange} placeholder='Belopp'></input>
                </label>
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