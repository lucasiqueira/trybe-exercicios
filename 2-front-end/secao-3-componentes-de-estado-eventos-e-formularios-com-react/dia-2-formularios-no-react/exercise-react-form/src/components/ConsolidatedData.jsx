import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/ConsolidatedData.css';

class ConsolidatedData extends React.Component {
  render() {
    const { formState } = this.props;
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      residenceType,
      curriculum,
      position,
      description,
    } = formState;
    return (
      <div>
        <section>
          <div className="info-card">
            <p className="label">Nome</p>
            <p className="user-answer">{name}</p>
          </div>
          <div className="info-card">
            <p className="label">Email</p>
            <p className="user-answer">{email}</p>
          </div>
          <div className="info-card">
            <p className="label">CPF</p>
            <p className="user-answer">{cpf}</p>
          </div>
        </section>
        <section>
          <div className="info-card">
            <p className="label">Endereço</p>
            <p className="user-answer">{address}</p>
          </div>
          <div className="info-card">
            <p className="label">Cidade</p>
            <p className="user-answer">{city}</p>
          </div>
          <div className="info-card">
            <p className="label">Estado</p>
            <p className="user-answer">{state}</p>
          </div>
          <div className="info-card">
            <p className="label">Tipo de endereço</p>
            <p className="user-answer">
              {(residenceType === 'house') ? 'Casa' : 'Apartamento'}
            </p>
          </div>
        </section>
        <section>
          <div className="info-card">
            <p className="label">Resumo do currículo</p>
            <p className="user-answer">{curriculum}</p>
          </div>
          <div className="info-card">
            <p className="label">Cargo</p>
            <p className="user-answer">{position}</p>
          </div>
          <div className="info-card">
            <p className="label">Descrição do cargo</p>
            <p className="user-answer">{description}</p>
          </div>
        </section>
      </div>
    );
  }
}

ConsolidatedData.propTypes = {
  formState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    residenceType: PropTypes.string,
    curriculum: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    consolidatedShown: PropTypes.bool,
  }).isRequired,
};

export default ConsolidatedData;
