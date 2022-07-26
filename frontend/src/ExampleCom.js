import React, { Component } from 'react'

export default class ExampleCom extends Component {
    constructor(props){
        super(props);
        this.state ={
            count=0;
        };
    }
    increase = () => {
        this.setState(state =>{ {count : state +1} });
    }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={ this.increase}></button>
      </div>
    )
  }
}
