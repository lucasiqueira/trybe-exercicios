import React from "react";

class State extends React.Component {
  render() {
    let message;
    const { handleChange, value } = this.props;
    if (value === "TX") message = 'Texas is a great state!'
    return (<label htmlFor="">
      State
      <select name="state" id="state" value={ value } onChange={ handleChange }>
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
      <span>{message ? message : ''}</span>
    </label>)
  }
}

export default State;
