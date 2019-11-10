import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesList } from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(actions.moviesList());
    this.props.moviesList();
  }
  render() {
    return (
      <div>
        {this.props.movies
          ? this.props.movies.map(item => <div key={item.id}>{item.name}</div>)
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ moviesList }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
