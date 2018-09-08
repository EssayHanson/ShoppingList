import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Item from './components/Items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item/>
      </div>
    );
  }
}

export default App;
