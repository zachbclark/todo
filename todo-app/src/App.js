import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        'Oranges',
        'Oranges',
        'Oranges',
      ],
      todo: ''
    }
    this.apiUrl = 'https://5b05b15d8be5840014ce4654.mockapi.io/items';
    this.addToList = this.addToList.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  addToList(todo){
    const items = this.state.items.concat({
      todo,
      key: Date.now()
    });
    this.setState({ items });
  }

  onChange(e){
    this.setState({todo: e.target.value})
  }

  // componentDidMount(){
  //   // Make HTTP reques with Axios
  //   axios.get(this.apiUrl)
  //     .then((res) => {
  //       // Set state with result
  //       this.setState({data:res.data});
  //     });
  // }

  render(){
    return(
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Todo List</h1> 
        </header>
        <h3 className="App-search">Search</h3>
        <form onSubmit={this.addToList}>
          <input
            className="App-input"
            value={this.state.todo}
            onChange={this.onChange}
          />
          <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div> 

    );
  }
}

export default App;
