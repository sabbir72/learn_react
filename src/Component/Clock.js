
import React, { Component } from "react";
import Button from "./Button";


class Clock extends Component {
    constructor(){
        super();
        this.state={
            date: new Date(),
            locale: 'bn-BD'

        };
    }

    componentDidMount(){
        setInterval(()=>this.tick(),1000);
    }
   componentWillUnmount(){
       clearInterval(this.clockTimer);
   }

tick(){
    this.setState({
      date: new Date(),
    });
}
handleClick=(locale)=>{
this.setState({
  locale,
}) ;
};

  render() {

const {date,locale}=this.state;

    return (
      <div>
        <h1 className="heading">
          <span>{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <Button change={this.handleClick} locale="en-US">Click Here</Button> */}
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US">
            Click Here
          </Button>
        ) : (
          <Button change={this.handleClick} locale="bn-BD">
            Click Here
          </Button>
        )}
      </div>
    );
  }
}

export default Clock;