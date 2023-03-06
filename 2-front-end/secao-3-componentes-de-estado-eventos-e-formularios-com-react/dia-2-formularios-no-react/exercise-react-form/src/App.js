import React from 'react';
import AdressData from './components/AddressData';
import ButtonArea from './components/ButtonArea';
import ConsolidatedData from './components/ConsolidatedData';
import EmploymentData from './components/EmploymentData';
import PersonalData from './components/PersonalData';
import countryStates from './countryStates';
import handleError from './helpers/handleError';
import handleValue from './helpers/handleValue';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: countryStates[0],
      residenceType: 'house',
      focus: '',
      curriculum: '',
      position: '',
      description: '',
      alertShown: false,
      consolidatedShown: false,
    };
  }

  handleInputFocus = ({ target }) => {
    const { city } = this.state;
    this.setState({ focus: target.name });
    if (target.name !== 'city' && (Number(city.slice(0, 1)))) {
      this.setState({ city: '' });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { consolidatedShown } = this.state;
    const error = handleError(target);
    if (!error && !consolidatedShown) {
      const newValue = handleValue(name, value);
      this.setState({ [name]: newValue });
    }
  };

  handleMouseEnter = () => {
    const { alertShown } = this.state;
    if (!alertShown) {
      // eslint-disable-next-line no-alert
      alert('Preencha com cuidado esta informação.');
      this.setState({ alertShown: true });
    }
  };

  handleSubmit = () => {
    this.setState({ consolidatedShown: true });
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: countryStates[0],
      residenceType: 'house',
      focus: '',
      curriculum: '',
      position: '',
      description: '',
      consolidatedShown: false,
    });
  };

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      residenceType,
      focus,
      curriculum,
      position,
      description,
      consolidatedShown,
    } = this.state;
    const isFormValid = name && email && cpf && address
      && city && curriculum && position && description;
    let displayDefinition = 'no-show-div';
    if (consolidatedShown) {
      displayDefinition = 'show-div';
    }
    return (
      <main>
        <header>
          <h1>
            Formulário de Incrição para Vaga
          </h1>
        </header>
        <section className="data-section">
          <section className="form-section">
            <PersonalData
              handleChange={ this.handleChange }
              name={ name }
              email={ email }
              cpf={ cpf }
            />
            <AdressData
              handleChange={ this.handleChange }
              handleInputFocus={ this.handleInputFocus }
              address={ address }
              city={ city }
              state={ state }
              states={ countryStates }
              residenceType={ residenceType }
              focused={ focus }
            />
            <EmploymentData
              handleChange={ this.handleChange }
              handleInputFocus={ this.handleInputFocus }
              handleMouseEnter={ this.handleMouseEnter }
              curriculum={ curriculum }
              position={ position }
              description={ description }
            />
            <ButtonArea
              handleSubmit={ this.handleSubmit }
              isFormValid={ isFormValid }
              handleReset={ this.handleReset }
            />
          </section>
          <section className={ `${displayDefinition} consolidated-data-section` }>
            {
              (consolidatedShown) ? <ConsolidatedData
                formState={ this.state }
                consolidatedShown={ consolidatedShown }
              /> : <div />
            }
          </section>
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
