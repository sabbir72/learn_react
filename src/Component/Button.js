import React, { Component } from 'react'

export default class Button extends Component {
    shouldComponentUpdate(nextProps){
             const{change:currentChange}=this.props;
             const{change:nextChange}=nextProps;
             if(currentChange===nextChange){
               return false;
             }
             return true;
    }
  render() {
 
      const {change} = this.props;
        return (
        <button onClick={change}>Click Here</button>
        )
  }
}
