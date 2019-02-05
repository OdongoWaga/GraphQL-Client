import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';


const getDirectorsQuery =gql`
{
    directors{
        name 
        id
    }
}

`


class AddMovie extends Component {

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default graphql(getDirectorsQuery) (AddMovie) ;
