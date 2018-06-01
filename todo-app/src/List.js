import React from 'react';
import './List.css';
import logo from './guy-fieri.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCheckCircle'

const Card = (item) => (
    <div className="Card">
      <FontAwesomeIcon icon={faCoffee} size="lg" style={Stylez}/>
      <p>{item.children}</p>
    </div>
);

const Stylez = {
  marginTop:"10px",
  marginBottom:"-5px"
}

const List = ({ items }) => (
  <ul>
    { items && items.map((item, index) => <Card key={index}>{item}</Card>) }
  </ul>
);

export default List;