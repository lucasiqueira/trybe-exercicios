import { Component } from "react";

const handlerClick1 = () => {
  console.log('Botão1');
}
const handlerClick2 = () => {
  console.log('Botão2');
}
const handlerClick3 = () => {
  console.log('Botão3');
}

class Body extends Component {
  render() {
    return (
      <>
        <button onClick={handlerClick1}>Botão 1</button>
        <button onClick={handlerClick2}>Botão 2</button>
        <button onClick={handlerClick3}>Botão 3</button>
      </>
    )
    
  }
}

export default Body;
