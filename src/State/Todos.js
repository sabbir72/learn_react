import React from 'react'
import Todo from './Todo'

export default function Todos({todos}) {
    console.log(todos)
  return (
    <div>
       {todos.map((item,index)=>
      <Todo key={index} item={item}/>
       )}
 
    </div>
  )
}
