import React, { Component } from 'react'

export default class Card extends Component {

    constructor(){
        super();
        this.state={
            Count: 0
        }
    }
 
upHandler=()=>{
    this.setState({
        Count: this.state.Count+1
    })
    
}

downHandler=()=>{
    this.setState({
        Count: this.state.Count-1
        
     
    })
}
  render() {
      const {Count}=this.state;
    return (
      <div>
        {/* props pass  */}
        <h2>Count: {Count}</h2>
        <button style={{padding:"10px ", margin:"5px" }} onClick={this.upHandler}>Up</button>
        <button style={{padding:"10px ", margin:"5px" }}onClick={this.downHandler}>Down</button>

        {/* state use nicy */}
      </div>
    );
  }
}
