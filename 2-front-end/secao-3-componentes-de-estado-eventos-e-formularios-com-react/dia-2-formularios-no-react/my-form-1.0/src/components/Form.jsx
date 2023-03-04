import React, { Component } from "react";
import AboutYou from "./AboutYou";
import State from "./State";

class Form extends Component {
  constructor() {
    super()
    this.fileInput = React.createRef();
    this.state = {
      name: '',
      email: '',
      state: 'Select a state',
      aboutYou: '',
      postgraduation: false,
    }
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, state, aboutYou, postgraduation } = this.state;
    return(
      <div>
        <h1>State and React - Fantastic Technology or reaction to regionalism?</h1>
        <form>
          <fieldset>
            <State handleChange={ this.handleChange } value={ state }/>
            <br />
            <label htmlFor="">
              Name
              <input type="text" name="name" value={ name } onChange={ this.handleChange }/>
            </label>
            <br />
            <label htmlFor="">
              Email
              <input type="email" name="email" value={ email } onChange={ this.handleChange } />
            </label>
            <br />
            <label htmlFor="">
              <input 
                type="checkbox" 
                name="postgraduation" 
                id="postgraduation" 
                value={ postgraduation } 
                onChange={ this.handleChange }
              />
              Mark if you are post-graduated
            </label>
          </fieldset>
          <AboutYou handleChange={ this.handleChange } value={ aboutYou } />
          <fieldset>
            <label htmlFor="">
              Insert your documentation:
              <input type="file" name="" id="" ref={this.fileInput} />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
