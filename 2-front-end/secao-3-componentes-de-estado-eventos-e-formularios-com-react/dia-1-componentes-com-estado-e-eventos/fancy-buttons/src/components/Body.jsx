import { Component } from "react";


class Body extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  state = {
    clickNumberButton1: 0,
    clickNumberButton2: 0,
    clickNumberButton3: 0,
  }

  handleClick1() {
    this.setState((prevState, _props) => ({
      clickNumberButton1: prevState.clickNumberButton1 + 1,
    }))
  }
  handleClick2() {
    this.setState((prevState, _props) => ({
      clickNumberButton2: prevState.clickNumberButton2 + 1,
    }))
  }
  handleClick3() {
    this.setState((prevState, _props) => ({
      clickNumberButton3: prevState.clickNumberButton3 + 1,
    }))
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleClick1}>{ this.state.clickNumberButton1 }</button>
        <button onClick={this.handleClick2}>{ this.state.clickNumberButton2 }</button>
        <button onClick={this.handleClick3}>{ this.state.clickNumberButton3 }</button>
      </>
    )
    
  }
}

export default Body;
