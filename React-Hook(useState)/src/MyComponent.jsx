/* React Hook = Special function that allows functional components to use React features 
                without writing class components (React v16.8) eg (useState, useEffect, useContext, useReducer, useCallback, and more....).

 useState() = A React hook that allows the creation of a stateful variable AND a setter 
              function to update its value in the virual DOM.
              [name, setName]

 Updater function = A function passed as an argument to setState()
                     usually ex. setYear(arrow function)
                     Allow for safe update based on the previous state used with multiple state updates and asynchronous functions Good practice to use updater functions
*/


import Reat, {useState} from 'react';


function MyComponent(){

    const [name, setName] = useState("Hunter Name");
    const [age, setAge] = useState(0);
    const [isEmployed, setISEmployed] = useState(false);

    const updateName = () => {
        setName("Sung jin wo");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmploymentStatus = () => {
        setISEmployed(!isEmployed);
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmploymentStatus}>Status</button>
            </div>
        </>
    )

}

export default MyComponent