import React,{useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx";

// useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each levl.

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const Mycontext = createContext();
// 3. <MyContext.Provider value={value}>
//     <child/>
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(Mycontext);


export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("BrokeB");

    return(
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB user={user} />
                </UserContext.Provider>
                

            </div>
        </>
    )
}

export default ComponentA