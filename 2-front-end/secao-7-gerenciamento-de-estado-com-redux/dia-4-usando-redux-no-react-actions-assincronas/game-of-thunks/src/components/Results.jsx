import { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    const { character } = this.props;
    const { name, culture, born } = character;
    return (
      <>
        <h1>{ name }</h1>
        <h3>{ culture }</h3>
        <p>{ born }</p>
      </>
    )
  }
};

const mapStateToProps = (state) => ({
  character: state.characterReducer.characterData,
});

export default connect(mapStateToProps)(Results);
