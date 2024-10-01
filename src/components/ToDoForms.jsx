import React from 'react'
import { useState } from 'react'

const ToDoForms = ({addTodos}) => {

    const[InputValue,setInputValue] = useState("")

    //Handle the form Submission
    const handleSubmit =(e) =>{
        e.preventDefault();
        addTodos(InputValue);   //Add The Todo Task
        setInputValue("");
    }

    return (
        <div>
            <form className='input-container' onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter Your  Task" 
                value={InputValue} 
                onChange={(e)=>setInputValue(e.target.value)}/>

                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default ToDoForms
