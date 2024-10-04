import React from "react";
import { v4 as uuid4 } from "uuid";
import ToDoForms from "./ToDoForms";
import ToDoActiveTask from "./ToDoActiveTask";
import ToDoCompletedTask from "./ToDoCompletedTask";

const ToDowrapper = ({todos,setTodos}) =>{

    //Add the task
    const addTodos =(inputValue) =>{
        if(inputValue.trim()){
            const newTodo={
                id:uuid4(),
                text:inputValue,
                completed:false,
                date:new Date().toLocaleString()
            }
            setTodos([...todos,newTodo])
        }
    }

    //Mark as Completed
    const markasCompleted = (id) => {
        const newTodo = todos.map(todo => (
            todo.id===id ? {...todo , completed:true} : todo
        ))
        setTodos(newTodo)
    }

    //delete todos
    const deleteTodos = (id) =>{
        const newTodo = todos.filter( todo => todo.id !== id)
        setTodos(newTodo)
    }
    
    return (
        <div>
            <ToDoForms addTodos={addTodos}/>
            <ToDoActiveTask todos={todos} markasCompleted={markasCompleted} deleteTodos={deleteTodos}/>
            <ToDoCompletedTask todos={todos} deleteTodos={deleteTodos} />
        </div>
    )
}
export default ToDowrapper;