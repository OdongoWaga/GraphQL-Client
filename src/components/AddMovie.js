import React, { Component } from 'react';

import {graphql, compose} from 'react-apollo';

import {getDirectorsQuery, addMovieMutation} from '../queries/queries'


class AddMovie extends Component {

    state={
        name: "",
        genre: "",
        authorId: ""
    }

    displayDirectors(){
    let data = this.props.getDirectorsQuery;
    if(data.loading){
        return (<option disabled> Loading Directors... </option>)
    } else{
        return data.directors.map(director =>{
            return (<option key = {director.id} value={director.id}>{director.name} </option> )
        })
    }
    }
    submitForm=(e)=> {
        e.preventDefault();
        this.props.addMovieMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }
    

    render(){
        return(
            <form id= "add-movie" onSubmit={this.submitForm}>

            <div className="field">
            <label>Movie name </label>
            <input type="text" onChange={(e)=> this.setState({name:e.target.value})} />
            </div>
            
            <div className="field">
            <label>Genre </label>
            <input type="text" onChange={(e)=> this.UNSAFE_componentWillMount.setState({genre: e.target.value})} />
            </div>
            
            <div className="field">
            <label>Director </label>
            <select onChange={(e)=> this.setState({ authorId:e.target.value})} >
                <option>Select Director </option>
                {this.displayDirectors()}
            </select>
            </div>
            
            <button> + </button>
            
            </form>

        );
    }
}

export default compose(

    graphql(getDirectorsQuery, {name:"getDirectorsQuery"}),
    graphql(addMovieMutation, {name:"addMovieMutation"})
)(AddMovie);
