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
mutation($name:String!,$genre:String!,$authorId: ID!){
    addMovie(name:$name,genre:$genre, authorId:$authorId){
        name
        id
    }
}
`


export {getDirectorsQuery, getMoviesQuery, addMovieMutation}