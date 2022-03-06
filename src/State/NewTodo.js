import React, { useState } from 'react'

export default function NewTodo(props) {

    const [todo, setTodo]=useState("");

    const handleChange=(Event)=>{
        setTodo(Event.target.value);
    }

    const handleSubmit=(Event)=>{
    Event.preventDefault();
    props.onTodo(todo);
    }

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label>New Todo : </label>
            <input type="text" id='todo' name='todo' value={todo} onChange={handleChange} /> <br/>
            <button>Add Todo</button>
        </form>
    </div>
  )
}
