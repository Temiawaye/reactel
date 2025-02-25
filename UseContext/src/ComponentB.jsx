import ComponentC from "./ComponentC.jsx";

// useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each levl.

function ComponentB(){
    return(
        <>
            <div className="box">
                <h1>ComponentB</h1>
                <ComponentC/>
            </div>
        </>
    )
}

export default ComponentB