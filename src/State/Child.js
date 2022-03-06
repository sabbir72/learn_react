import React from 'react'

export default function Child({data, onChild}) {
    const data2=" i am child component"
onChild(data2)
  return (
    <div>
        I am child.
<br/>
        {data}
    </div>
  )
}
