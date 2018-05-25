import React from 'react';
import { Card, CardBody } from "react-simple-card";
import './List.css';

const List = ({ items }) => (
  <ul className="ListItem">
    { items && items.map((item, index) => <li key={index}>{item}</li>) }
  </ul>
  );

const CardTemplate = ({ name }) => (
  <Card>
    <CardBody>
      {name}
    </CardBody>
  </Card>
  );

  const PrettyList = ({ items }) => (
    items.map(item => <CardTemplate>{items}</CardTemplate>)  
  );

export default List;