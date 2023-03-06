import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/PersonalData.css';

class PersonalData extends React.Component {
  render() {
    const { handleChange, name, email, cpf } = this.props;
    return (
      <fieldset className="personal-data-fieldset">
        <div className="id-data-div">
          <label>
            <p className="form-label">Nome</p>
            <input
              type="text"
              onChange={ handleChange }
              id="name"
              name="name"
              value={ name }
            />
          </label>
          <label>
            <p className="form-label">CPF</p>
            <input
              type="text"
              onChange={ handleChange }
              id="cpf"
              name="cpf"
              value={ cpf }
            />
          </label>
        </div>
        <label>
          <p className="form-label">Email</p>
          <input
            type="email"
            onChange={ handleChange }
            id="email"
            name="email"
            value={ email }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
};

export default PersonalData;
