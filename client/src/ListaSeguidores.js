import React, {Component} from 'react';
import Seguidor from './Seguidor'

class FollowerList extends Component {
    constructor(props) {
        super(props)
    }
    mostrarSeguidores() {
        return this.props.seguidores.map((tamaño, ubicacion) => {
            return <Seguidor seguidor={tamaño} key={ubicacion}/>;
        });
    }

    render() {
    	if(this.props.seguidores.length==0) {
    		return (
    		<h4>Lo siento, ese usuario no tiene seguidores</h4>
    		);
    	} else {
    		return (
            <div>
                {this.mostrarSeguidores()}
            </div>);
    	}
        
    }
}

export default FollowerList;