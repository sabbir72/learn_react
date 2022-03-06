import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn:true
      }
    }

  render() {
const {isLogIn}=this.state
return (
    <div>
      {isLogIn? <Home/>:<Login/>}
    </div>
)
 }
}
