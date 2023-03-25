// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, isEmailSaved } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        (isEmailSaved) && (
          <h3
            data-testid="id-email-valid"
            className={verifyEmail(email) ? 'green-text' : 'red-text'}
          >{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
        )
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
  isEmailSaved: PropTypes.bool.isRequired,
};

export default ValidEmail;
