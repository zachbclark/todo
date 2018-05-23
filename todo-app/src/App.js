import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    }
    this.apiUrl = 'https://5b05b15d8be5840014ce4654.mockapi.io/items';
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  render(){
    return(
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Todo List</h1> 
        </header>
        <h3 className="App-search">Search</h3>
        <input 
          value={this.state.term}
          onChange={this.onChange}
          className="App-input"
        />
      </div> 

    );
  }
}

export default App;
