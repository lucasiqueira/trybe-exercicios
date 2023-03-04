import React from "react";

class AboutYou extends React.Component {
  render() {
    const { handleChange, aboutYou } = this.props;
    return (
      <fieldset>
        <label htmlFor="">
          About you:
          <textarea 
            name="aboutYou" 
            id="aboutYou" 
            cols="100" 
            rows="5" 
            value ={ aboutYou }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    )
  }
}

export default AboutYou;