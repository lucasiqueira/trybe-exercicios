import { Component } from "react";

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      state: 'Select a state',
      aboutyou: '',
    }
  }

  handleChange = ({target}) => {
    const { name, value } = target
    this.setState({ [name]: value })
    console.log(value);
  }

  render() {
    const { name, email, state, aboutyou } = this.state;
    return(
      <div>
        <h1>State and React - Fantastic Technology or reaction to regionalism?</h1>
        <form>
          <label htmlFor="">
            State
            <select name="state" id="state" value={ state } onChange={ this.handleChange }>
              <option value="">Select a state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

          </label>
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
            About you:
            <textarea 
              name="aboutyou" 
              id="aboutyou" 
              cols="30" 
              rows="10" 
              value ={ aboutyou }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
