import React, { Component } from 'react';
import List from './List';
import logo from './guy-fieri.png';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      items: []
    };
  }

  componentWillMount() {
    fetch('https://5b05b15d8be5840014ce4654.mockapi.io/items', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then(( data ) => {
      this.setState({
        items: data.map(({ name }) => name)
      });
    });
  }

  componentDidMount() {
    fetch('https://5b05b15d8be5840014ce4654.mockapi.io/items', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then(( data ) => {
      this.setState({
        todoId: data.id
      });
    });
  }

  onChange = (event) => {
    this.setState({ todo: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { todoId, todo } = this.state;

    fetch('https://5b05b15d8be5840014ce4654.mockapi.io/items', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
          name: todo
      })
    })
    .then(() => {
      return fetch(`https://5b05b15d8be5840014ce4654.mockapi.io/items`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      }).then((res) => res.json())
    })
    .then((data) => {
      this.setState({
        items: data.map(({ name }) => name)
      });
    });
    this.setState({ todo: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Todo List</h1> 
        </header> 
        <h3 className="App-search"></h3>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            className="App-input" 
            value={this.state.todo} 
            onChange={this.onChange} 
          />
          <button className="button">Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}