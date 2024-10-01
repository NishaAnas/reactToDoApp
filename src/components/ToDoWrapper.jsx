import React from "react";
import ToDoForms from "./ToDoForms";
import ToDoActiveTask from "./ToDoActiveTask";
import ToDoCompletedTask from "./ToDoCompletedTask";

const ToDowrapper = ({todos,setTodos}) =>{

    //Add the task
    const addTodos =(inputValue) =>{
        if(inputValue.trim()){
            const newTodo={
                text:inputValue,
                completed:false,
                date:new Date().toLocaleString()
            }
            setTodos([...todos,newTodo])
        }
    }

    //Mark as Completed
    const markasCompleted = (index) => {
        const newTodo = todos.map((todo,i) => (
            i===index ? {...todo , completed:true} : todo
        ))
        setTodos(newTodo)
    }

    //delete todos
    const deleteTodos = (index) =>{
        const newTodo = todos.filter((_,i) => i !== index)
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