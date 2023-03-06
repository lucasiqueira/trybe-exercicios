import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/AddressData.css';

class AdressData extends React.Component {
  render() {
    const {
      handleChange,
      handleInputFocus,
      address,
      city,
      state,
      states,
      residenceType,
    } = this.props;
    return (
      <fieldset className="address-data-fieldset">
        <label htmlFor="address">
          <p className="form-label">Endereço</p>
          <input
            type="text"
            name="address"
            id="address"
            onChange={ handleChange }
            onFocus={ handleInputFocus }
            value={ address }
          />
        </label>
        <div className="localization-div">
          <label htmlFor="city">
            <p className="form-label">Cidade</p>
            <input
              type="text"
              name="city"
              id="city"
              onChange={ handleChange }
              onFocus={ handleInputFocus }
              value={ city }
            />
          </label>
          <label htmlFor="state">
            <p className="form-label">Estado</p>
            <select
              name="state"
              id="state"
              value={ state }
              onChange={ handleChange }
              onFocus={ handleInputFocus }
            >
              {
                states.map((s) => (
                  <option value={ s } key={ s }>{s}</option>
                ))
              }
            </select>
          </label>
        </div>
        <section onChange={ handleChange } onFocus={ handleInputFocus }>
          <p className="form-label">Tipo de residência</p>
          <div className="radio-div">
            <label htmlFor="house" className="radio-container">
              <input
                type="radio"
                name="residenceType"
                id="house"
                value="house"
                checked={ residenceType === 'house' }
                readOnly
              />
              Casa
            </label>
            <label htmlFor="apartment" className="radio-container">
              <input
                type="radio"
                name="residenceType"
                id="apartment"
                value="apartment"
                checked={ residenceType === 'apartment' }
                readOnly
              />
              Apartamento
            </label>
          </div>
        </section>
      </fieldset>
    );
  }
}

AdressData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  residenceType: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdressData;
