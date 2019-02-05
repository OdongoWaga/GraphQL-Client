import React, { Component } from 'react';

import {graphql} from 'react-apollo';

import {getDirectorsQuery} from '../queries/queries'


class AddMovie extends Component {

    state={
        name: "",
        genre: "",
        authorId: ""
    }

    displayDirectors(){
    let data = this.props.data;
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

export default graphql(getDirectorsQuery) (AddMovie) ;
