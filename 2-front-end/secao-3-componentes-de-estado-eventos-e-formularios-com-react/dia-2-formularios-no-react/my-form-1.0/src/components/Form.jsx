import { Component } from "react";

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
    }
  }

  handleNameChange = ({target}) => {
    this.setState({ name: target.value })
  }

  render() {
    const { name } = this.state;
    return(
      <form action="">
        <label htmlFor="">
          Selecione qual é o estado em que você mora:
          <select name="" id="">
            <option value="">GO</option>
            <option value="">MT</option>
            <option value="">MS</option>
            <option value="">TO</option>
            <option value="">DF</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          Nome
          <input type="text" name="name" value={ name } onChange={ this.handleNameChange }/>
        </label>
        <br />
        <label htmlFor="">
          Sobrenome
          <input type="text" />
        </label>
        <br />
        <label htmlFor="">
          Fale sobre você:
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
      </form>
    )
  }
}

export default Form;
