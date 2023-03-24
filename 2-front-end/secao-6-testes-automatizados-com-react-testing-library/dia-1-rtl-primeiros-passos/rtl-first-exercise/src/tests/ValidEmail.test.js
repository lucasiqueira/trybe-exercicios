import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } isEmailSaved={ true } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } isEmailSaved={ true } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando de mensagem de validade do e-mail não aparecer, caso não tenha sido salvo e-mail', () => {
  render(<ValidEmail email='' isEmailSaved={ false } />);
  const invalidEmail = screen.queryByText(/email inválido/i);
  const validEmail = screen.queryByText(/email válido/i);
  expect(validEmail).not.toBeInTheDocument();
  expect(invalidEmail).not.toBeInTheDocument();
})

// Utilizando a função 'toHaveAttribute', verificamos se o elemento possui a classe
// com o nome esperado para cada situação.
test('Testando se o componente possui texto verde ao ser digitado um e-mail válido.', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} isEmailSaved={ true } />);
  const isValidText = screen.getByTestId('id-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o componente possui texto vermelho ao ser digitado um e-mail inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} isEmailSaved={ true } />);
  const isValidText = screen.getByTestId('id-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});