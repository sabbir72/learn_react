import React, { useState } from 'react'

export default function Hello() {
    const [Count, setCount] =useState(0)
    const clickHandlers =()=>{
        setCount(Count+1);
    }
 
  return (
    <div>
      <h1>Count: {Count}</h1>
      <br />
      <button onClick={clickHandlers}>Click</button>
    </div>
  );
}
