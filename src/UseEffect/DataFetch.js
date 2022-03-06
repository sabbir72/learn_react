import React, { useEffect, useState } from 'react'
const lodingMessage = <p>Data is Loding</p>;
const errorMessage = <p>Data is error</p>;


export default function DataFetch() {
const [todos , setTodos]=useState(null)
const [isLoding , setIsLoding]=useState(true)
const [error , setError]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
              .then((res) => {
                  if(!res.ok){
                      throw Error("fething is not succesful")
                  }
                return res.json();
              })
              .then((data) => {
                setTodos(data);
               setIsLoding(false)
               setError(null)
              })
              .catch((error)=>{
                setError(error.message)
                 setIsLoding(false);
              })
        },[])
        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then((res)=>{
        //     return res.json()
        // })
        // .then((data)=>{
        //     setTodos(data)
        //     console.log(todos)
        // })
       
    })
     const todoElement =
       todos &&
       todos.map((todo) => {
         return <p key={todo.id}>{todo.title}</p>;
       });

     
  return (
    <div>
        <h1>Todos</h1>
        {error && errorMessage}
        {isLoding && lodingMessage}
        {todoElement}
    </div>
  )
}
