import React,{useState, useEffect, use} from "react";

// useEffect() = React Hook that tells React to DO Some Code When (pick one);
//               This component re-renders
//               This component mounts
//               The state of a vlue

// useEffects(function, [dependencies])

// 1. useEffects(() => {})           Runs after every re-render
// 2. useEffects(() => {}, [])       Runs only on mount
// 3. useEffects(() => {}, [value])  Runs only on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Susbscriptions (real-time updates)
// #4 Fecthing Data from API
// #5 clean up when a component unmounts



function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count, color]);

    /*useEffect(() => {
        document.title = `My Counter Program`;
    }, []);*/

    useEffect(() => {
        window.addEventListener("Resize", handleResize);
        console.log("EventListener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EventListener Removed");
        }
    }, [])
    
    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function addCount(){
        setCount(c => c + 1);
    }
    
    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c == "green" ? "red" : "green");
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtarct</button>
            <br />
            <button onClick={changeColor}>Change Color</button>

            <p>Windows Width: {width}px</p>
            <p>Windows Height: {height}px</p>            
        </>
    );
}

export default MyComponent;