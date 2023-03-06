import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/ButtonArea.css';

class ButtonArea extends React.Component {
  render() {
    const { handleSubmit, handleReset, isFormValid } = this.props;
    return (
      <div className="button-area">
        <button
          type="submit"
          onClick={ handleSubmit }
          className="button"
          disabled={ !isFormValid }
          id="submit-button"
        >
          Enviar
        </button>
        <button
          type="reset"
          className="button"
          onClick={ handleReset }
          id="reset-button"
        >
          Limpar
        </button>
      </div>
    );
  }
}

ButtonArea.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isFormValid: PropTypes.string.isRequired,
};

export default ButtonArea;
