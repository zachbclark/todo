import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCheckCircle';

const Card = (item) => (
    <div className="Card">
      <FontAwesomeIcon 
        icon={faCoffee} 
        size="lg" 
        style={IconStyle} 
        onClick={this.removeItem}
      />
      <p>{item.children}</p>
    </div>
);

const IconStyle = {
  marginTop:"10px",
  marginBottom:"-5px"
}

export default Card;