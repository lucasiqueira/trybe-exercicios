import React from "react";

class AboutYou extends React.Component {
  render() {
    let error;
    const { handleChange, value } = this.props;
    if (value.length > 140) {
      error = 'This message should be a based tweet, not the new one!'
    }
    return (
      <fieldset>
        <label htmlFor="">
          About you:
          <textarea 
            name="aboutYou" 
            id="aboutYou" 
            cols="100" 
            rows="5" 
            value ={ value }
            onChange={ handleChange }
          />
        </label>
        <div>{(error) ? error : ''}</div>
      </fieldset>
    )
  }
}

export default AboutYou;