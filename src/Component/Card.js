import React from 'react'
import Classes from '../Style/Card.module.css'
export default function Card({Dis,dec}) {
  return (
    <div>
        <h2 className={Classes.Title}>Title : {Dis}</h2>
        <p  className={Classes.dis}>Desc : {dec}</p>
        
    </div>
  )
}
