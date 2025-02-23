import React, { useState} from 'react';

function ToDoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function inputTask(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = task.filter((element, i) => i !== index);
        setTask(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return(
        <>
           <div className="hed">
                <h1>To-Do-List</h1>
                <input type="text" onChange={inputTask} value={newTask} placeholder="Enter a task..."/>
                <button onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="movebtn" onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className="movebtn" onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                )}
            </ol>
        </>
    )

}

export default ToDoList;