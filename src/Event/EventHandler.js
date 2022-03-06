import React, { Component } from 'react'

export default class EventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue: '',
         Count : 1
      }
    }
    
    changeHandler=(e)=>{
     this.setState({
         changeValue: e.target.value
     })
    }
       clickHandler=()=>{
           this.setState({
               Count:this.state.Count +1
           })
       }
  render() {
    const{Count,changeValue}=this.state
    return (
      <div>
                <input type="text"  onChange={this.changeHandler} />
                <br/>
                        <h1>{Count  }</h1>
                <br/>
                <button onClick={this.clickHandler}>Click Here</button>
                <h2>{changeValue}</h2>
      </div>
    )
  }
}
