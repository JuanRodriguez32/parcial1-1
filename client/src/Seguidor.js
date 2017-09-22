import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Seguidor extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        	<div>
            	<img className="image" alt={this.props.seguidor.login} src={this.props.seguidor.avatar_url}/>
            	<h3> {this.props.seguidor.login} </h3>
            </div>	
            )};
	}

export default Seguidor;