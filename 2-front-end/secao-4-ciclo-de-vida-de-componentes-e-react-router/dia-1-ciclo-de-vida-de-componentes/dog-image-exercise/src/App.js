import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.state = {
      imageUrl: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    const localValue = localStorage.getItem('dogImage');
    if (localValue) {
      console.log(localValue);
      this.setState({
        imageUrl: localValue,
        isLoading: false,
      });
      return;
    }
    this.fetchDogImage();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { imageUrl } = nextState;
    if (!imageUrl.includes('terrier')) return true;
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('dogImage', imageUrl);
    const breed = imageUrl.split('/')[4];
    alert(breed);
  }

  async fetchDogImage() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await resp.json();
    const { message } = json;
    this.setState({
      imageUrl: message,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, imageUrl } = this.state;
    return (
      <>
        <h1>Doguinhos</h1>
        {
          (isLoading) ? (
            <div><p>Loading...</p></div>
          ) : (
            <img src={ imageUrl } alt="Doguinho aleatório" />
          )
        }
        <button onClick={ this.fetchDogImage }>Novo doguinho!</button>
      </>
    );
  }
}

export default App;
