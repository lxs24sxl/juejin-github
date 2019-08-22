

import React from 'react';
import { Item } from './style';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <Item  >
      <Link style={{ color: props.current === props.title ? '#007fff' : '#909090' }} to={'/timeline/' + props.title}>
        {props.name}
      </Link>
    </Item>
  )
}

export default NavItem;