import React from 'react';

class Person extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      personData: {},
    }
  }

  async fetchPerson() {
    const response = await fetch('https://api.randomuser.me/');
    const json = await response.json();
    console.log(json.results);
    this.setState({
      personData: json.results[0],
      loading: false,
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const maxAge = 50;
    if (nextState.personData.dob.age < maxAge) return true;
    return false;
  }

  componentDidMount() {
    this.fetchPerson();
  }

  render() {
    const { loading, personData } = this.state;
    const { picture, name, email, dob } = personData;
    return (
      (loading) ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={ picture.large } alt="Imagem com erro"></img>
          <p>{`${name.title} ${name.first} ${name.last}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Idade: ${dob.age}`}</p>
        </div>
      )
    )
  }
}

export default Person;
