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
mutation($name:String!,$genre:String!,$directorId: ID!){
    addMovie(name:$name,genre:$genre, directorId:$directorId){
        name
        id
    }
}
`


export {getDirectorsQuery, getMoviesQuery, addMovieMutation}