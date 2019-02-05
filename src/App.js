import React, { Component } from 'react';
import WatchList from './components/WatchList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from 'react-apollo'
import AddMovie from './components/AddMovie';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql" 
})

class App extends Component {
    render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
      <h1>Watch List </h1>
      <WatchList />
      <AddMovie />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
