import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]= useState("");
    const handleSubmet = e =>{
         e.preventDefault();
         setValue("")
         addTodo(value);
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmet}>
        <input type="text" className='todo-input' value={value} placeholder='what is your today task?'
         onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm