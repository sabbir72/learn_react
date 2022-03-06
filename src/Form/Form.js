import React, { useState } from 'react'
import Classes from './Form.module.css'
export default function Form() {

 const [user,setUser]=useState({name: "", email:"",password:""})


  
  const handleChange=(e)=>{
setUser({...user, [e.target.name]:e.target.value})
    
  }
  const EventSubmit=(e)=>{
  console.log("sumited");
  console.log(user);
  e.preventDefault()
  }


  return (
    <div>
      <h2> Registaion</h2>
      <form>
        <div className={Classes.div}>
          <label>Name: </label>
          <input type="text" name="name" id="name"   onChange={handleChange} required />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" id="email"  onChange={handleChange} required />
        </div>

        <div>
          <label>Password: </label>
          <input type="Password" name="Password" id="Password"  onChange={handleChange} required />
        </div>

       
       

        <div>
          <button type="submit" onClick={EventSubmit}>Submit </button>
        </div>

       
      </form>
    </div>
  );
}
