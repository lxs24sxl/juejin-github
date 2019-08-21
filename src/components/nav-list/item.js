import React from 'react';

function Item (props) {
  return (
    (props.list || []).map(item => {
      return (
        <li key={item.id}>
          {item.name}
        </li>
      )
    })
  )
}

export default Item;