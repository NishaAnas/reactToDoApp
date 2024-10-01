import React from "react";
import "./App.css";
import ToDowrapper from "./components/ToDoWrapper";
import { useState } from "react";

const App =()=>{

  const [todos,setTodos] = useState([])
  return (
    <div className="app">
      <h1>{new Date().toLocaleString()}
        <h2>To-Do App</h2>
        <ToDowrapper todos= {todos} setTodos={setTodos}/>
      </h1>
    </div>
  )
}

export default App