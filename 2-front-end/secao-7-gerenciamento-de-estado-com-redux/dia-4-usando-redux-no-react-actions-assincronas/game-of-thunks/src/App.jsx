import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Results from './components/Results';
import { fetchAPI } from './redux/actions';

class App extends React.Component {
  state = {
    inputValue: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { dispatch, propsIsLoading } = this.props;
    const { inputValue } = this.state;
    return (
      <>
        {
          (propsIsLoading) ? (
            <p>Carregando...</p>
          ) : (
            <>
              <label>Character's Name</label>
                <input
                    type="text"
                    value={ inputValue }
                    name="inputValue"
                    onChange={ this.handleChange } />
                <button
                  onClick={ () => dispatch(fetchAPI(inputValue)) }
                >
                  Search
                </button>
                <Results />
            </>
          )
        }
      </>
    );
  }
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  propsIsLoading: state.characterReducer.isLoading,
});

export default connect(mapStateToProps)(App);
