import React, { useEffect, useState } from 'react'

export default function useEffectExample() {
  const[count,setCount]=useState(0)
  const[isLoading,setIsLoading]=useState(false)

useEffect(()=>{
console.log("useEffect");
}, [count])

  return (
    <div>
    {console.log("rendaring")}
      <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(count=>count+1)}}>Up</button>
      <button onClick={()=>{setIsLoading(!isLoading)}}>isLoading</button>
    </div>
  );
}
