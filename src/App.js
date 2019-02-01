import React, { Component } from 'react';
import Routes from './routes/Routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      cart: [],
    };
  }
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}
export default App;
