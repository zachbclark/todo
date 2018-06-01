import React from 'react';
import '../List.css';
import Card from './Card';

// removeItem = () => {
//   const { todoId, todo } = this.state;

//   fetch('https://5b05b15d8be5840014ce4654.mockapi.io/items', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         name: todo
//     })
//   })
//   .then(() => {
//     return fetch(`https://5b05b15d8be5840014ce4654.mockapi.io/items`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//       }
//     }).then((res) => res.json())
//   })
//   .then((data) => {
//     this.setState({
//       items: data.map(({ name }) => name)
//     });
//   });
//   this.setState({ todo: '' });
// }

const List = ({ items }) => (
  <ul>
    { items && items.map((item, index) => <Card key={index}>{item}</Card>) }
  </ul>
);

export default List;