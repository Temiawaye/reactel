// useState() = Re-renders the component when the state value changes

// useRef() = "use Reference" does not cause re-renders when its value changes. When you want a component to "remember" some information, but you dont want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transactions
//            3. Managing Timers and Intervals


import React, {useState, useEffect, useRef} from "react";

function Mycomponent(){

    const inpurRef = useRef(null);
    const inpurRef2 = useRef(null);
    const inpurRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function handleClick() {
        inpurRef.current.focus();
        inpurRef.current.style.backgroundColor = "yellow";
        inpurRef2.current.style.backgroundColor = "";
        inpurRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inpurRef2.current.focus();
        inpurRef2.current.style.backgroundColor = "green";
        inpurRef.current.style.backgroundColor = "";
        inpurRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inpurRef3.current.focus();
        inpurRef3.current.style.backgroundColor = "red";
        inpurRef.current.style.backgroundColor = "";
        inpurRef2.current.style.backgroundColor = "";
    }

    
    return(
        <>
            <div>
                <button onClick={handleClick}>Click Me!</button>
                <input ref={inpurRef} type="text" />

            </div>

            <div>
                <button onClick={handleClick2}>Click Me2!</button>
                <input ref={inpurRef2} type="text" />

            </div>

            <div>
                <button onClick={handleClick3}>Click Me3!</button>
                <input ref={inpurRef3} type="text" />

            </div>

        </>
    )

}

export default Mycomponent