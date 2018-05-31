import React from 'react';
import { Card, CardBody } from "react-simple-card";
import './List.css';

// const List = ({ items }) => (
//   <ul className="ListItem">
//     { items && items.map((item, index) => <li key={index}>{item}</li>) }
//   </ul>
//   );

const CardTemplate = (item) => (
  <Card>
    <CardBody className="ListItem">
      <p>{item.children}</p>
    </CardBody>
  </Card>
  );

  const List = ({ items }) => (
    <ul>
      { items && items.map((item, index) => <CardTemplate key={index}>{item}</CardTemplate>) }
    </ul>
    );

export default List;