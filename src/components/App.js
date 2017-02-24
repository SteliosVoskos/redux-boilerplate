import React, { Component } from 'react';

export default class App extends Component {
  handleOnClick = (e) => {
    e.preventDefault();
    this.props.increment();
  };
  render() {
    return (
      <div>
        <h1>{this.props.person.name}</h1>
        <button onClick={this.handleOnClick}>+</button>
        <h4>{this.props.person.counter}</h4>
      </div>
    );
  }
}
