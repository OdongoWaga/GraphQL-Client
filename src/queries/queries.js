import {gql} from 'apollo-boost';

const getMoviesQuery =gql`
{
    movies{
        name 
        id
    }
}

`

const getDirectorsQuery =gql`
{
    directors{
        name 
        id
    }
}

`

const addMovieMutation =gql`
mutation{
    addMovie(name:"",genre:"", authorId:""){
        name
        id
    }
}
`


export {getDirectorsQuery, getMoviesQuery, addMovieMutation}