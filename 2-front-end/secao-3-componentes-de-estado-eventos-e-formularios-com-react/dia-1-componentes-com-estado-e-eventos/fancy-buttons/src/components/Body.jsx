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
  
  colorButton = (number, target) => {
    if (number % 2 === 0) {
      target.className = 'even'
      console.log('even');
    } else {
      target.className = 'odd';
      console.log('odd');
    }
  }

  handleClick1 = async (event) => {
    await this.setState((prevState, _props) => ({
      clickNumberButton1: prevState.clickNumberButton1 + 1,
    }))
    this.colorButton(this.state.clickNumberButton1, event.target);
  }
  handleClick2 = async (event) => {
    await this.setState((prevState, _props) => ({
      clickNumberButton2: prevState.clickNumberButton2 + 1,
    }))
    this.colorButton(this.state.clickNumberButton2, event.target);
  }
  handleClick3 = async (event) => {
    await this.setState((prevState, _props) => ({
      clickNumberButton3: prevState.clickNumberButton3 + 1,
    }))
    this.colorButton(this.state.clickNumberButton3, event.target);
  }

  
  render() {
    return (
      <>
        <button onClick={this.handleClick1} id="1" className="even">{ this.state.clickNumberButton1 }</button>
        <button onClick={this.handleClick2} id="2" className="even">{ this.state.clickNumberButton2 }</button>
        <button onClick={this.handleClick3} id="3" className="even">{ this.state.clickNumberButton3 }</button>
      </>
    )
    
  }
}

export default Body;
