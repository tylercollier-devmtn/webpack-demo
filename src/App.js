import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Webpack demo</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}