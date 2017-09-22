import React, { Component } from 'react';
import ListaSeguidores from './ListaSeguidores.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seguidores: [],
      nombre: "",
      lista: []
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    const nombre = document.getElementById("usuario").value;

    if(!nombre.length==0) {
    fetch("/seguidores/"+nombre).then(response => response.json())
      .then(json => {
          this.setState({
            seguidores: json.data,
            lista: this.state.lista.concat([nombre])
          });
      });
    }
  }

  mostrarOrdenSeguidores() {
    if(this.state.seguidores.length > 0) {
    const temp = this.state.lista.map((nombre) => 
      <li key={nombre}>{nombre}</li>
      );
      return (
      <ul>{temp}</ul>
      );
    } else {
      return (
      <h4> No hay lista </h4>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-logo"> GitHub </h1>
        </div>
        <div className="App-middle">
          <h1> Selección de usuario </h1>
            <input name="usuario" id="usuario" placeholder="usuario"/>
            <button onClick={this.handleEvent}>Buscar</button>

          <h1> Seguidores de ese usuario </h1>
          <ListaSeguidores seguidores={this.state.seguidores}/>

          <h1> Seguidores cronológicamente </h1>
          <div> {this.mostrarOrdenSeguidores()} </div>
        </div> 
      </div>
    );
  }
}

export default App;
