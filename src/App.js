import React, { Component } from 'react';
import WatchList from './components/WatchList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider } from 'react-apollo'


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
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
