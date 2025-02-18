


// Click event = An interaction when a user clicks on a specific element.
//               We can respond to click by passing a callback to the onclick event handler.


function Click(){


    /*let count = 0;
    const handleClick = (name) => {

        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else {
        console.log(`${name} stop clicking me!`);
        }
    }*/
       

    const handleClick = (e) => e.target.textContent = "Ouch!";
  

    return(
        // <button onClick={() => handleClick("Ban")}>Click me</button>
        // <button onClick={(e) => handleClick(e)}>Click me</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Click