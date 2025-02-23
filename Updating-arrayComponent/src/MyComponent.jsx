import React,{ useState} from 'react';

function MyComponent() {

    const [foods, setfoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setfoods(f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setfoods(foods.filter((element, i) => i !== index))
    }


    return(
        <>
            <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} > {food} </li>)}
                </ul>

                <input type="text" name="" id="foodInput" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    )
}

export default MyComponent