import React, { Component } from 'react'

export default class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 1,
    };
  }

  clickHandler = () => {
    this.setState({
      Count: this.state.Count + 1,
    });
  };
  render() {
      const { Count} = this.state;
    return (
      <div>
        <h1>{Count}</h1>
        <br />
        <button onClick={this.clickHandler}>Click Here</button>
      </div>
    );
  }
}
