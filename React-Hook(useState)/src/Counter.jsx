// Updater function = A function passed as an argument to setState() usually ex. setYear(arrow function)
//                        Allow for safe update based on the previous state used with 
//                        multiple state updates and asynchronous functions Good practice to use updater functions



import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {

        //using the updater function

        setCount(precount => precount + 1);
        // setCount(precount => precount + 1);
        // setCount(precount => precount + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={increment}>Increment</button>
            </div>
        </>
    )

}

export default Counter