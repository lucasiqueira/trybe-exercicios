import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/EmploymentData.css';

class EmploymentData extends React.Component {
  render() {
    const {
      handleChange,
      handleInputFocus,
      handleMouseEnter,
      curriculum,
      position,
      description,
    } = this.props;
    return (
      <fieldset className="employment-data-fieldset">
        <label htmlFor="curriculum">
          <p className="form-label">Resumo do currículo</p>
          <textarea
            name="curriculum"
            id="curriculum"
            onChange={ handleChange }
            onFocus={ handleInputFocus }
            value={ curriculum }
          />
        </label>
        <label htmlFor="position">
          <p className="form-label">Cargo</p>
          <input
            type="text"
            id="position"
            name="position"
            onChange={ handleChange }
            onFocus={ handleInputFocus }
            onMouseEnter={ handleMouseEnter }
            value={ position }
          />
        </label>
        <label htmlFor="description">
          <p className="form-label">Descrição do cargo</p>
          <textarea
            name="description"
            id="description"
            onChange={ handleChange }
            onFocus={ handleInputFocus }
            value={ description }
          />
        </label>
      </fieldset>
    );
  }
}

EmploymentData.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  curriculum: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EmploymentData;
