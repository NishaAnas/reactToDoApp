import React from 'react'

const ToDoCompletedTask = ({todos,deleteTodos}) => {
    return (
        <>
            <h3>Completed Tasks</h3>
            <ul>
                {
                    todos.filter((todo)=> todo.completed)
                    .map((todo,index)=>(
                        <li className='completed'>
                            <div>
                                <span className='task-text'>{todo.text}</span>
                                <span className='task-date'>{todo.date}</span>
                            </div>
                            <div className='action-icons'>
                                <span className='material-icons' style={{color:"#888"}}>check_circle</span>
                                <span className='material-icons' onClick={ () => deleteTodos(index)}>delete</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ToDoCompletedTask