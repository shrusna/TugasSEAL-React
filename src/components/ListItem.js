import React from "react";

const ListItem = ({ ListItem }) => {
  return (
    <div>
      <ul>
        {ListItem.data.map((item, index) => (
          <li key={item}>
            <label>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
