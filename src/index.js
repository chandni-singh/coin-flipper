import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Flipper from './Flipper';

class App extends Component {
  render() {
    return (
      <Flipper />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


