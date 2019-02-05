import React, { Component } from 'react';
import {getMoviesQuery} from '../queries/queries';
import {graphql} from 'react-apollo';
import MovieDetails from './MovieDetails';



class WatchList extends Component {
    state={
        selected: null
    }

    displayMovies(){
        let data = this.props.data;
        if(data.loading){
          return (<div>Loading Movies...</div>)
        } else{
          return data.movies.map(movie=> {
            return (
              <li key ={movie.id} onClick={(e)=> {this.setState({selected:movie.id})}}>{movie.name}</li>
            );
          })
        }
     
      }
    
    render(){
        return(
            <div>
                <ul id="movie-list">
                    {this.displayMovies()}
                </ul> 
                <MovieDetails movieId ={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getMoviesQuery) (WatchList) ;