import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

export default function Home() {
const dummyTodos = ["todo1", "todo2", "todo3","todo4","todo5"];

const [todos, setTodos] = useState(dummyTodos);

const handleNewTodos=(newTodo)=>{
setTodos([...todos,newTodo])
}
  return (
    <div>
      <NewTodo onTodo={handleNewTodos} />
      <Todos todos={todos} />
    </div>
  );
}
