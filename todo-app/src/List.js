import React from 'react';

const List = ({ items }) => (
  <li>
    { items && items.map((item, index) => <li key={index}>{item}</li>) }
  </li>
  );

export default List;