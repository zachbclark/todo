import React from 'react';
import './List.css';

const List = ({ items }) => (
  <ul className="ListItem">
    { items && items.map((item, index) => <li key={index}>{item}</li>) }
  </ul>
  );

export default List;