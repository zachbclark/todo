import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: [
        'Oranges',
        'Oranges',
        'Apples',
      ]
    }
    this.apiUrl = 'https://5b05b15d8be5840014ce4654.mockapi.io/items';
    this.onChange = this.onChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  addToList(e){
    this.setState({items:[...this.state.items, e.target.value]})
  }

  componentDidMount(){
    // Make HTTP reques with Axios
    // axios.get(this.apiUrl)
    //   .then((res) => {
    //     // Set state with result
    //     this.setState({data:res.data});
    //   });
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
          ref='todoInput'
        />
        <button onClick={this.addToList()}>Add</button>
        <List items={this.state.items}/>
      </div> 

    );
  }
}

export default App;
