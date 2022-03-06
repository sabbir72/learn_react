import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";


export default function DataFetch() {
  const {data,isLoding,error} = useFetch("https://jsonplaceholder.typicode.com/todos");
   const lodingMessage = <p>Data is Loding</p>;
   const errorMessage = <p>Data is error</p>;


  const todoElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && errorMessage}
      {isLoding && lodingMessage}
      {todoElement}
    </div>
  );
}
