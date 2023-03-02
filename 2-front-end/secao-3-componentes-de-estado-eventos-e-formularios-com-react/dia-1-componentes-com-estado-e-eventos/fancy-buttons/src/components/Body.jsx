import { Component } from "react";


class Body extends Component {
  constructor() {
    super();
    this.handlerClick1 = this.handlerClick1.bind(this);
    this.handlerClick2 = this.handlerClick2.bind(this);
    this.handlerClick3 = this.handlerClick3.bind(this);
  }

  handlerClick1() {
    console.log('Button 1 clicked!');
  }
  handlerClick2() {
    console.log('Button 2 clicked!');
  }
  handlerClick3() {
    console.log('Button 3 clicked!');
  }
  render() {
    return (
      <>
        <button onClick={this.handlerClick1}>Button 1</button>
        <button onClick={this.handlerClick2}>Button 2</button>
        <button onClick={this.handlerClick3}>Button 3</button>
      </>
    )
    
  }
}

export default Body;
