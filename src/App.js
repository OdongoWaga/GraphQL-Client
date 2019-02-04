import React, { Component } from 'react';
import WatchList from './components/WatchkList';


class App extends Component {
  render() {
    return (
      <div id="main">
      <h1>Watch List </h1>
      <WatchList />
      </div>
    );
  }
}

export default App;
