import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';


const getMoviesQuery =gql`
{
    movies{
        name 
        id
    }
}

`

class WatchList extends Component {
    render(){
        return(
            <div>
                <ul id="book-list">
                    <li>Movie name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getMoviesQuery) (WatchList) ;