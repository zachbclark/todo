import React from 'react';
import './List.css';

// const List = ({ items }) => (
//   <ul className="ListItem">
//     { items && items.map((item, index) => <li key={index}>{item}</li>) }
//   </ul>
//   );

const CardTemplate = (item) => (
    <div className="Card">
      <p>{item.children}</p>
    </div>
  );

  const List = ({ items }) => (
    <ul>
      { items && items.map((item, index) => <CardTemplate key={index}>{item}</CardTemplate>) }
    </ul>
    );

  // const defaultStyles = {
  //   width: "10%",
  //   display: "block",
  //   position: "relative",
  //   borderRadius: "4px",
  //   marginBottom: "10px",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   border: "1px solid #ccc",
  // };

export default List;