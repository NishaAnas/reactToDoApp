import React from 'react'

const ToDoActiveTask = ({todos,markasCompleted,deleteTodos}) => {
    return (
        <>
            <h3>Active Tasks</h3>
            <ul>
                {
                    todos.filter((todo)=> !todo.completed)
                    .map((todo,index)=>(
                        <li className='not-completed'>
                            <div>
                                <span className='task-text'>{todo.text}</span>
                                <span className='task-date'>{todo.date}</span>
                            </div>
                            <div className='action-icons'>
                                <span className='material-icons' onClick={() => markasCompleted(todo.id)}>check_circle</span>
                                <span className='material-icons' onClick={() => deleteTodos(todo.id)}>delete</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ToDoActiveTask
