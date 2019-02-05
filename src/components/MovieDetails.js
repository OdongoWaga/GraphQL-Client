import React, { Component } from 'react';
import {getMovieQuery} from '../queries/queries';
import {graphql} from 'react-apollo';

class MovieDetails extends Component {


    
    render(){
        return(
            <div id="movie-details">
            <p> Output Movie Details Here  </p>
        
            </div>
        );
    }
}

  export default graphql(getMovieQuery)(MovieDetails);